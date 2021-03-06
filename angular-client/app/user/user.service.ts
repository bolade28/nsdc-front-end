import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import { User } from './user'
import { Configuration } from '../app.constants'


// import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';


@Injectable()
export class UserService {

    private actionUrl: string;
    public headers:Headers; //*********

    constructor(private http: Http, private config: Configuration) {
      this.actionUrl = config.Server + 'nsdc/v1.0/users';
 
      this.headers = new Headers();  
      this.headers.append('Content-Type', 'application/json');
    }


 // Add a new comment
    // addUser (user: User): Observable<User> {
    //     let userAddUrl = this.config.Server + 'nsdc/v1.0/post_user';
    //     let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    //     let options       = new RequestOptions({ headers: headers }); // Create a request option

    //     return this.http.post(userAddUrl, JSON.stringify(user), options) // ...using post request
    //                      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //                      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    // }   

   addUser(user: User) {
        let userAddUrl = this.config.Server + 'nsdc/v1.0/post_user';
        this.http.post(userAddUrl, JSON.stringify(user), {headers:this.headers} ); 
    }


// getUsers(): Observable<User []> {
//     let userListUrl = this.config.Server + 'nsdc/v1.0/users';
//     return this.http.get(userListUrl)
//                          .map((res:Response) => res.json())
//                          //...errors if any
//                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     

//     }
    // Implement method to get all users
    getUsers() {
        let userListUrl = this.config.Server + 'nsdc/v1.0/users';
        console.log('URL = ' + userListUrl);
        return this.http.get(userListUrl).toPromise().then(response=>response.json() as User[]).catch(this.handleError);
    }

// getUserById(id:number): Observable<User> {
//     let userUrl = this.config.Server + 'nsdc/v1.0/users/' + id;
//     return this.http.get(userUrl)
//                          .map((res:Response) => res.json())
//                          //...errors if any
//                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     

//     }

    getUserById(id: number) {
        let userUrl = this.config.Server + 'nsdc/v1.0/users/' + id;
        console.log('URL222 -' + userUrl)
        return this.http.get(userUrl).toPromise().then(response=>response.json() as User).catch(this.handleError);
    }


    

   updateUser( user: User) {
        let userEditUrl = this.config.Server + 'nsdc/v1.0/users/' + user.id;
        console.log('URL Update User 222 -' + userEditUrl)
        return this.http.put(userEditUrl, JSON.stringify(user), 
        {headers:this.headers}).toPromise().then(() => user).catch(this.handleError);
    }    


        // Update a comment
    // updateUser (id: number, user: User): Observable<User> {
    //     let userEditUrl = this.config.Server + 'nsdc/v1.0/edit_user/' + id;
    //     let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    //     let options       = new RequestOptions({ headers: headers }); // Create a request option

    //     return this.http.put(userEditUrl, JSON.stringify(user), options) // ...using put request
    //                      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //                      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    // }   

   deleteUser(id: number) {
        let deleteUrl = this.config.Server + 'nsdc/v1.0/users/' + id;
        console.log('URL Delete user 222 -' + deleteUrl)
        this.http.delete(deleteUrl); 
    }  

    // Implement method to handle errors if any.
    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error)
    }
}