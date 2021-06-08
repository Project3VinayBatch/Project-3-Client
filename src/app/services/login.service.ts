import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL: string;
  constructor(private http: HttpClient) {

   }
   verify(user:User){
     
   }
}
