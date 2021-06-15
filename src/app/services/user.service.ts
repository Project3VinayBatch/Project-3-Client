import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private UserGetUrl = 'http://localhost:8080/user';
  //need to move url to environmental variable
  private userSource = new BehaviorSubject<User>(new User); //Im worried this wil lcover user with a new user object
  currentUser = this.userSource.asObservable();

  //CONSTRUCTOR
  constructor(private http: HttpClient) { }
  changeUser(user:User){ 
    this.userSource.next(user);
  }
  setUserFromApi():void{//needs to be async...
    // this.userSource.next();
    // nextUser:User = this.http.get<User>(this.UserGetUrl);
    this.currentUser = this.http.get<User>(this.UserGetUrl);

  }
  getUserFromApi(): Observable<User>{ //this now sets user from api call to
    return this.http.get<User>(this.UserGetUrl);
  } //just make something work... send this directly to component

  
  setUser(): Observable<User>{ //this now sets user from api call to
    return this.http.get<User>(this.UserGetUrl);
  }
  
}
