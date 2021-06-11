import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL: string;
  constructor(private http: HttpClient, private authService: AuthService) {

  }
  verify(user: User) {
    //first deal with validations
    //then make a call to server for user info...
    //then get user info
    //then check authService to make sure JWT is correct...
      //...or should I check jwt before getting user... nope, cant



    if (this.authService.isLoggedIn()) {

    }
  }
}
