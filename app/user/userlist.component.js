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
var user_service_1 = require("./user.service");
var http_1 = require("@angular/http");
var app_constants_1 = require("../app.constants");
var UserListComponent = (function () {
    function UserListComponent(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().then(function (users) { return _this.users = users; });
        //   this.userService.getUsers()
        //            .subscribe(
        //              users => this.users = users,
        //              error =>  this.erroreMsg = <any>error);
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    core_1.Component({
        selector: 'user-list',
        templateUrl: 'app/user/userlist.component.html',
        styleUrls: ['app/css/apps.css'],
        providers: [user_service_1.UserService, app_constants_1.Configuration]
    }),
    __metadata("design:paramtypes", [http_1.Http, user_service_1.UserService])
], UserListComponent);
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=userlist.component.js.map