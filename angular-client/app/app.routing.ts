import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user/userlist.component';
import { AddUserComponent } from './user/adduser.component';
import { UserDetailComponent } from './user/userdetail.component';
import { RoleListComponent } from './role/rolelist.component';
import { AddRoleComponent } from './role/addrole.component';
import { PermissionComponent } from './permission/permission.component';


const appRoutes: Routes = [
    // Add the redirect first
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UserListComponent
    },
    {
        path: 'users/:id',
        component: UserDetailComponent
    },    
    {
        path: 'adduser',
        component: AddUserComponent
    },
    {
        path: 'roles',
        component: RoleListComponent
    }, 
    {
        path: 'addrole',
        component: AddRoleComponent
    }, 
    {
        path: 'permissions',
        component: PermissionComponent
    }    
];

// Now export the routes.
export const routing = RouterModule.forRoot(appRoutes);

// We are combining our routing components into a single array. This will be used later.
export const routedComponents = [UserListComponent, AddUserComponent, UserDetailComponent, RoleListComponent, AddRoleComponent, PermissionComponent]