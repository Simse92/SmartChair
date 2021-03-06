var keyElems;
function init()
{
	let x=document.getElementsByClassName("keyButton");
	keyElems=[];
	for(let i=0;i<x.length;i++)
	{
		let elem=x[i].getElementsByTagName('input')[0];
		elem.addEventListener("keydown",handleKey);
		keyElems.push(elem);
	}
	keyElems[0].focus();
}

function handleKey(event)
{
	event.preventDefault();
	if (window.XMLHttpRequest) {
		let xhr=new XMLHttpRequest();
		xhr.open("POST","/api/keys",true)
		xhr.onload=()=>{
			if (xhr.readyState == XMLHttpRequest.DONE) {
				event.target.value=JSON.parse(xhr.responseText)[event.target.id];
				keyElems[(keyElems.indexOf(event.target)+1)%keyElems.length].focus();
		    }
		}
		let v={};
		//v[event.target.id]=event.key.length==1?event.key.charCodeAt(0):event.keyCode;
		v[event.target.id]=event.keyCode;
		xhr.send(JSON.stringify(v));
	}
}

function saveConfig()
{
	if (window.XMLHttpRequest) {
		let xhr=new XMLHttpRequest();
		xhr.open("POST","/api/save",true)
		xhr.onload=()=>{
			if (xhr.readyState == XMLHttpRequest.DONE) {
				responseLabel.textContent="Saving successful!";
		    }
		}
		xhr.send();
	}
}