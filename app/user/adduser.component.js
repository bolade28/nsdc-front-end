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
var forms_1 = require("@angular/forms");
var user_service_1 = require("./user.service");
var app_constants_1 = require("../app.constants");
var role_service_1 = require("../role/role.service");
var AddUserComponent = (function () {
    function AddUserComponent(_formBuilder, roleService, userService) {
        this._formBuilder = _formBuilder;
        this.roleService = roleService;
        this.userService = userService;
        this.submitAttempt = false;
    }
    AddUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userForm = this._formBuilder.group({
            firstname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(30)]],
            lastname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(30)]],
            email: [null, [forms_1.Validators.required]],
            username: [null, [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(30)]],
            password: [null, [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(30)]],
            status: [],
            role: [null, [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(30)]],
        });
        this.roleService.getRoles().then(function (roles) {
            _this.roles = roles;
            _this.userForm.patchValue({ role: roles });
            console.log('From add 0. Roles size ' + roles.length);
        });
    };
    AddUserComponent.prototype.onSubmit = function () {
        console.log('000000000000000');
        this.submitAttempt = true;
        this.user.username = this.userForm.controls['username'].value;
        this.user.firstname = this.userForm.controls['firstname'].value;
        this.user.lastname = this.userForm.controls['lastname'].value;
        this.user.password = this.userForm.controls['password'].value;
        this.user.email = this.userForm.controls['email'].value;
        this.user.status = this.userForm.controls['status'].value;
        this.user.role_id = this.userForm.controls['role_id'].value;
        // this.userService.addUser(this.user)
        //  .subscribe(
        //    user => this.user = user,
        //    error =>  this.errorMsg = <any>error,
        //    () => console.log('111111111'));
        this.userService.addUser(this.user);
        console.log(this.user);
    };
    return AddUserComponent;
}());
AddUserComponent = __decorate([
    core_1.Component({
        selector: 'add-user',
        templateUrl: 'app/user/adduser.component.html',
        styleUrls: ['app/css/apps.css'],
        providers: [user_service_1.UserService, role_service_1.RoleService, app_constants_1.Configuration]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, role_service_1.RoleService, user_service_1.UserService])
], AddUserComponent);
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=adduser.component.js.map