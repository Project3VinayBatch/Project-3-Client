import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Files } from '../model/files';
import { Initiative } from '../model/initiative';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class SpecificService {
  private getfilesUrl: string;
  private postfilesUrl: string;
  private getmembersUrl: string;
  private postmembersUrl: string;
  private addmemberurl: String;

  constructor(private http: HttpClient) {
    this.getfilesUrl = "";
    this.postfilesUrl = "";
    this.getmembersUrl="http://localhost:8080/initiatives/id/";
    this.postmembersUrl="";
    this.addmemberurl="http://localhost:8080/initiative/signup";
   }

    
            
    
  
  
  
    public getFiles(): Observable<Files[]>{
      return this.http.get<Files[]>(this.getfilesUrl);
    }

    public postFiles(): Observable<Files[]>{
      return this.http.get<Files[]>(this.getfilesUrl);
    }


    public postMembers(): Observable<Files[]>{
      return this.http.get<Files[]>(this.getfilesUrl);
    }


    

    public addMembers(userinfo): Observable<User>{
      return this.http.post<User>(String(this.addmemberurl+userinfo), User);
    }

    public getMembers(initId): Observable<Initiative>{
      return this.http.get<Initiative>(this.getmembersUrl+initId);
    }
  
   
  }

