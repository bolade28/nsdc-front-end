"use strict";
var router_1 = require("@angular/router");
var userlist_component_1 = require("./user/userlist.component");
var adduser_component_1 = require("./user/adduser.component");
var userdetail_component_1 = require("./user/userdetail.component");
var rolelist_component_1 = require("./role/rolelist.component");
var addrole_component_1 = require("./role/addrole.component");
var permission_component_1 = require("./permission/permission.component");
var appRoutes = [
    // Add the redirect first
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: userlist_component_1.UserListComponent
    },
    {
        path: 'users/:id',
        component: userdetail_component_1.UserDetailComponent
    },
    {
        path: 'adduser',
        component: adduser_component_1.AddUserComponent
    },
    {
        path: 'roles',
        component: rolelist_component_1.RoleListComponent
    },
    {
        path: 'addrole',
        component: addrole_component_1.AddRoleComponent
    },
    {
        path: 'permissions',
        component: permission_component_1.PermissionComponent
    }
];
// Now export the routes.
exports.routing = router_1.RouterModule.forRoot(appRoutes);
// We are combining our routing components into a single array. This will be used later.
exports.routedComponents = [userlist_component_1.UserListComponent, adduser_component_1.AddUserComponent, userdetail_component_1.UserDetailComponent, rolelist_component_1.RoleListComponent, addrole_component_1.AddRoleComponent, permission_component_1.PermissionComponent];
//# sourceMappingURL=app.routing.js.map