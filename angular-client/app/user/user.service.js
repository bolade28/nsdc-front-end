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
// import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
var UserService = (function () {
    function UserService(http, config) {
        this.http = http;
        this.config = config;
        this.actionUrl = config.Server + 'nsdc/v1.0/users';
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    // Add a new comment
    // addUser (user: User): Observable<User> {
    //     let userAddUrl = this.config.Server + 'nsdc/v1.0/post_user';
    //     let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    //     let options       = new RequestOptions({ headers: headers }); // Create a request option
    //     return this.http.post(userAddUrl, JSON.stringify(user), options) // ...using post request
    //                      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //                      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    // }   
    UserService.prototype.addUser = function (user) {
        var userAddUrl = this.config.Server + 'nsdc/v1.0/post_user';
        this.http.post(userAddUrl, JSON.stringify(user), { headers: this.headers });
    };
    // getUsers(): Observable<User []> {
    //     let userListUrl = this.config.Server + 'nsdc/v1.0/users';
    //     return this.http.get(userListUrl)
    //                          .map((res:Response) => res.json())
    //                          //...errors if any
    //                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    //     }
    // Implement method to get all users
    UserService.prototype.getUsers = function () {
        var userListUrl = this.config.Server + 'nsdc/v1.0/users';
        console.log('URL = ' + userListUrl);
        return this.http.get(userListUrl).toPromise().then(function (response) { return response.json(); }).catch(this.handleError);
    };
    // getUserById(id:number): Observable<User> {
    //     let userUrl = this.config.Server + 'nsdc/v1.0/users/' + id;
    //     return this.http.get(userUrl)
    //                          .map((res:Response) => res.json())
    //                          //...errors if any
    //                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    //     }
    UserService.prototype.getUserById = function (id) {
        var userUrl = this.config.Server + 'nsdc/v1.0/users/' + id;
        console.log('URL222 -' + userUrl);
        return this.http.get(userUrl).toPromise().then(function (response) { return response.json(); }).catch(this.handleError);
    };
    UserService.prototype.updateUser = function (user) {
        var userEditUrl = this.config.Server + 'nsdc/v1.0/users/' + user.id;
        console.log('URL Update User 222 -' + userEditUrl);
        return this.http.put(userEditUrl, JSON.stringify(user), { headers: this.headers }).toPromise().then(function () { return user; }).catch(this.handleError);
    };
    // Update a comment
    // updateUser (id: number, user: User): Observable<User> {
    //     let userEditUrl = this.config.Server + 'nsdc/v1.0/edit_user/' + id;
    //     let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    //     let options       = new RequestOptions({ headers: headers }); // Create a request option
    //     return this.http.put(userEditUrl, JSON.stringify(user), options) // ...using put request
    //                      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //                      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    // }   
    UserService.prototype.deleteUser = function (id) {
        var deleteUrl = this.config.Server + 'nsdc/v1.0/users/' + id;
        console.log('URL Delete user 222 -' + deleteUrl);
        this.http.delete(deleteUrl);
    };
    // Implement method to handle errors if any.
    UserService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_constants_1.Configuration])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map