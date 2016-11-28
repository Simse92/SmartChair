"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var chair_component_1 = require('./chair/chair.component');
var pressure_component_1 = require('./pressure/pressure.component');
var temperature_component_1 = require('./temperature.component');
var linechart_component_1 = require('./charts/linechart.component');
var app_component_1 = require("./app.component");
var header_1 = require("./header/header");
var footer_1 = require("./footer/footer");
var navbar_component_1 = require("./navbar/navbar.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var app_routing_1 = require("./app.routing");
var chair_service_1 = require("./shared/chair.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.AppRoutingModule
            ],
            declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent, header_1.Header, footer_1.Footer, navbar_component_1.NavbarComponent, chair_component_1.ChairComponent, pressure_component_1.PressureComponent, temperature_component_1.TemperatureComponent, linechart_component_1.LineChartComponent],
            providers: [chair_service_1.ChairService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map