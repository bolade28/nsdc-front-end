import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }      from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { RoleListComponent } from './role/rolelist.component';
import { RoleComponent } from './role/role.component';
import { routing, routedComponents } from './app.routing';
import { HttpModule } from '@angular/http';

//import { DeleteUserComponent } from './app/user/deleteuser.component'
//import { EditUserComponent } from './app/user/edituser.component'



@NgModule({
  imports:      [ BrowserModule, 
                  HttpModule,
                  routing,
                  ReactiveFormsModule ],
  declarations: [ AppComponent, RoleListComponent, RoleComponent, routedComponents ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
