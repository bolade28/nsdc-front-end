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
var role_service_1 = require("./role.service");
var AddRoleComponent = (function () {
    function AddRoleComponent(_formBuilder, roleService) {
        this._formBuilder = _formBuilder;
        this.roleService = roleService;
        this.showDetail = false;
    }
    AddRoleComponent.prototype.ngOnInit = function () {
        this.roleForm = this._formBuilder.group({
            rolename: ['Data Validator', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(30)]],
            description: ['', [forms_1.Validators.minLength(3), forms_1.Validators.maxLength(500)]]
        });
    };
    AddRoleComponent.prototype.onSelect = function () {
        this.showDetail = true;
    };
    AddRoleComponent.prototype.onSubmit = function () {
        this.role.rolename = this.roleForm.controls['rolename'].value;
        this.role.description = this.roleForm.controls['description'].value;
        this.roleService.addRole(this.role);
        console.log(this.role);
    };
    return AddRoleComponent;
}());
AddRoleComponent = __decorate([
    core_1.Component({
        selector: 'add-role',
        templateUrl: 'app/role/addrole.component.html',
        styleUrls: ['app/css/apps.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, role_service_1.RoleService])
], AddRoleComponent);
exports.AddRoleComponent = AddRoleComponent;
//# sourceMappingURL=addrole.component.js.map