import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoleService } from './role.service';
import { Role } from './role'


@Component({
  selector: 'add-role',
  templateUrl : 'app/role/addrole.component.html',
  styleUrls: ['app/css/apps.css']
})
export class AddRoleComponent implements OnInit { 

roleForm: FormGroup;
role: Role;

public showDetail = false

constructor(private _formBuilder: FormBuilder, private roleService: RoleService) {}

ngOnInit(){
  this.roleForm = this._formBuilder.group({
    rolename:['Data Validator', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    description:['', [Validators.minLength(3), Validators.maxLength(500)]]
  })
}

  onSelect() {
    this.showDetail = true
  }

  onSubmit(){

    this.role.rolename = this.roleForm.controls['rolename'].value;
    this.role.description = this.roleForm.controls['description'].value;    
    this.roleService.addRole(this.role);

    console.log(this.role);    
  }
}
