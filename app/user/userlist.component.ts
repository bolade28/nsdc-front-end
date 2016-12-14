import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Configuration } from '../app.constants';

@Component({
  selector: 'user-list',
  templateUrl : 'app/user/userlist.component.html',
  styleUrls: ['app/css/apps.css'],
  providers: [UserService, Configuration]
})


export class UserListComponent implements OnInit{ 

    public users: User[]
    public erroreMsg: string

    constructor(private http: Http, private userService: UserService ) {

    }

    ngOnInit(): void {
        this.userService.getUsers().then((users) => this.users = users)

        //   this.userService.getUsers()
        //            .subscribe(
        //              users => this.users = users,
        //              error =>  this.erroreMsg = <any>error);
    }

}