import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private UserGetUrl = 'http://localhost:8080/user';
  //need to move url to environmental variable
  constructor(private http: HttpClient) { }
  getUser(): Observable<User>{
    return this.http.get<User>(this.UserGetUrl);
  }
}
