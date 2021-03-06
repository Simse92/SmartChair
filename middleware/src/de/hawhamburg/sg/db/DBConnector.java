package de.hawhamburg.sg.db;
import java.util.concurrent.TimeUnit;
import org.influxdb.InfluxDB;
import org.influxdb.InfluxDBFactory;
import org.influxdb.dto.Point;
import org.influxdb.dto.Point.Builder;

import com.hawhamburg.sg.data.ChairMessage;

/**
 * DBConnector converts a Chairmessage to a DataPoint
 * and inserts it into the Influx-Database 
 * Needs to be configured in
 * db.properties
 */
public class DBConnector {
	
	private InfluxDB influxDB;
	private String dbName;
	
	private DBProperties properties;

	public DBConnector(DBProperties props){
		try {
			this.properties = props;
			System.out.println("connecting to: \"http://"+properties.getDbHost()+":"+properties.getDbPort()+"\"");
			influxDB = InfluxDBFactory.connect("http://"+properties.getDbHost()+":"+properties.getDbPort(),props.getDbUser(), properties.getDbPassword());
			this.dbName = properties.getDBName();
			
			// Flush every 2000 Points, at least every 100ms
			influxDB.enableBatch(2000, 100, TimeUnit.MILLISECONDS);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@SuppressWarnings("rawtypes")
	public void write(ChairMessage msg ){
		influxDB.write(dbName, "autogen", chairMessageToPoint(msg));
	}
	
	 @SuppressWarnings("rawtypes")
	private Point chairMessageToPoint(ChairMessage msg){
//		 System.out.println("writing msg to db: " + msg.getSensortype());
		 Builder pointBuilder = Point.measurement(msg.getSensortype().name()).time(msg.getTimestamp(), TimeUnit.MILLISECONDS);
         msg.addValuesToPoint(pointBuilder);
         pointBuilder.tag("ChairUUID", msg.getDeviceUuid());
         Point point = pointBuilder.build();
//         System.out.println(point.toString());
         return point;
	 }
}
