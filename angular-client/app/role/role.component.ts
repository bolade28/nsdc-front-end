import { Component } from '@angular/core';

@Component({
  selector: 'role',
  templateUrl : 'app/role/role.component.html',
  styleUrls: ['app/css/apps.css'],
  inputs: ["role"]
})


export class RoleComponent { 
    public role
}