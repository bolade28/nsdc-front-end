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
var core_1 = require("@angular/core");
var role_service_1 = require("./role.service");
var http_1 = require("@angular/http");
var app_constants_1 = require("../app.constants");
var RoleListComponent = (function () {
    function RoleListComponent(http, roleService) {
        this.http = http;
        this.roleService = roleService;
    }
    RoleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roleService.getRoles().then(function (roles) { return _this.roles = roles; });
    };
    return RoleListComponent;
}());
RoleListComponent = __decorate([
    core_1.Component({
        selector: 'role-list',
        templateUrl: 'app/role/rolelist.component.html',
        styleUrls: ['app/css/apps.css'],
        providers: [role_service_1.RoleService, app_constants_1.Configuration]
    }),
    __metadata("design:paramtypes", [http_1.Http, role_service_1.RoleService])
], RoleListComponent);
exports.RoleListComponent = RoleListComponent;
//# sourceMappingURL=rolelist.component.js.map