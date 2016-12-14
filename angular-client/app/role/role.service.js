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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var app_constants_1 = require("../app.constants");
var RoleService = (function () {
    function RoleService(http, config) {
        this.http = http;
        this.config = config;
        this.actionUrl = config.ServerWithApiUrl;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    RoleService.prototype.addRole = function (role) {
        var userAddUrl = this.config.Server + 'nsdc/v1.0/post_role';
        this.http.post(userAddUrl, JSON.stringify(role), { headers: this.headers });
    };
    // Implement method to get all users
    RoleService.prototype.getRoles = function () {
        var roleListUrl = this.config.Server + 'nsdc/v1.0/roles';
        console.log('URL = ' + roleListUrl);
        return this.http.get(roleListUrl).toPromise().then(function (response) { return response.json(); }).catch(this.handleError);
    };
    RoleService.prototype.getRoleById = function (id) {
        var roleUrl = this.config.Server + 'nsdc/v1.0/roles/' + id;
        console.log('URL222 -' + roleUrl);
        return this.http.get(roleUrl).toPromise().then(function (response) { return response.json(); }).catch(this.handleError);
    };
    RoleService.prototype.updateUser = function (id, role) {
        var roleEditUrl = this.config.Server + 'nsdc/v1.0/roles/' + id;
        this.http.put(roleEditUrl, JSON.stringify(role), { headers: this.headers });
    };
    RoleService.prototype.deleteRole = function (id) {
        var deleteUrl = this.config.Server + 'nsdc/v1.0/roles/' + id;
        this.http.delete(deleteUrl);
    };
    // Implement method to handle errors if any.
    RoleService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return RoleService;
}());
RoleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_constants_1.Configuration])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map