import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { User } from './user'
import { Role } from '../role/role'
import { Configuration } from '../app.constants';
import { RoleService } from '../role/role.service';

@Component({
  selector: 'add-user',
  templateUrl : 'app/user/adduser.component.html',
  styleUrls: ['app/css/apps.css'],
  providers: [UserService, RoleService, Configuration]
})
export class AddUserComponent implements OnInit { 

userForm: FormGroup;
user: User;
roles: Role[];
errorMsg: string;

public submitAttempt: boolean = false;

constructor(private _formBuilder: FormBuilder, private roleService: RoleService, private userService: UserService) {}

ngOnInit(){
  this.userForm = this._formBuilder.group({
    firstname:['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    lastname:['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    
    email: [null,[Validators.required]],
    username:[null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    password:[null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    status:[],
    role:[null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],

  })

    this.roleService.getRoles().then((roles) => {this.roles = roles;
    this.userForm.patchValue({role: roles});
    console.log('From add 0. Roles size ' + roles.length)});   
}


  onSubmit(){

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
  }
}
