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
var router_1 = require("@angular/router");
var app_constants_1 = require("../app.constants");
var role_service_1 = require("../role/role.service");
var UserDetailComponent = (function () {
    function UserDetailComponent(_formBuilder, userService, roleService, route) {
        this._formBuilder = _formBuilder;
        this.userService = userService;
        this.roleService = roleService;
        this.route = route;
        this.showDetail = false;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('1111. USER ngOnInit ========= ');
        this.userForm = this._formBuilder.group({
            firstname: [null, [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(30)]],
            lastname: [null, [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(30)]],
            role_id: [null, [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(30)]],
            email: [null, [forms_1.Validators.pattern('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$')]],
            username: [null, [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(30)]],
            password: [null, [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(30)]],
            status: []
        });
        this.sub = this.route.params.subscribe(function (params) {
            var id = Number.parseInt(params['id']);
            console.log('11110000000. USER ID = ' + id);
            // There is major bug when using form builder and have decided to keep 
            // the secret in my note book. If you are interested in knowing what
            // it is contact me.
            _this.userService.getUserById(id).then(function (user) {
                _this.user = user;
                _this.userForm.patchValue({ username: user.username });
                _this.userForm.patchValue({ lastname: user.lastname });
                _this.userForm.patchValue({ password: user.password });
                _this.userForm.patchValue({ firstname: user.firstname });
                _this.userForm.patchValue({ email: user.email });
                _this.userForm.patchValue({ status: user.status });
                _this.userForm.patchValue({ role_id: user.role_id });
                console.log('0. USER ID ' + user.id + ' -- USERNAME= ' + user.username);
            });
            // this.roleService.getRoles()
            //                  .subscribe(
            //                    roles => this.roles = roles,
            //                    error =>  this.errorMessage = <any>error);
            console.log('23232323. ngInit Method = ');
            _this.roleService.getRoles().then(function (roles) {
                _this.roles = roles;
                console.log('34343434. USER ID = ' + id);
                _this.userForm.patchValue({ role: roles });
                console.log('009090. Roles size ' + roles.length);
            });
        });
    };
    UserDetailComponent.prototype.onSubmit = function () {
        console.log('========onSubmit() method has been invoked =======');
        this.user.username = this.userForm.controls['username'].value;
        this.user.firstname = this.userForm.controls['firstname'].value;
        this.user.lastname = this.userForm.controls['lastname'].value;
        this.user.password = this.userForm.controls['password'].value;
        this.user.email = this.userForm.controls['email'].value;
        this.user.status = this.userForm.controls['status'].value;
        this.user.role_id = this.userForm.controls['role'].value;
        console.log('EMAIL = ' + this.user.email + ' ***** ROLE ID = ' + this.user.role_id);
        this.userService.updateUser(this.user);
        // this.userService.updateUser(this.user.id, this.user)
        //      .subscribe(
        //        user => this.user = user,
        //        error =>  this.errorMsg = <any>error);
        console.log(this.user);
    };
    UserDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    core_1.Component({
        selector: 'update-user',
        templateUrl: 'app/user/userdetail.component.html',
        styleUrls: ['app/css/apps.css'],
        providers: [user_service_1.UserService, role_service_1.RoleService, app_constants_1.Configuration]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService,
        role_service_1.RoleService, router_1.ActivatedRoute])
], UserDetailComponent);
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=userdetail.component.js.map