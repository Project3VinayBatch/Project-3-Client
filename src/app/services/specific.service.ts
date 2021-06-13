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
  private getInitiativeUrl: string;
  private setPoCUrl: string;

  constructor(private http: HttpClient) {
    this.getfilesUrl = '';
    this.postfilesUrl = '';
    this.getmembersUrl='http://localhost:8080/initiatives/id/';
    this.postmembersUrl='';
    this.addmemberurl='http://localhost:8080/initiative/signup';
    this.getInitiativeUrl="http://localhost:8080/initiatives/id/";
    this.setPoCUrl='http://localhost:8080/updatepoc';
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

    public getInitiative(id:string): Observable<Initiative>{
      return this.http.get<Initiative>(this.getInitiativeUrl+id);
    }
    
    public addMembers(userinfo:string): Observable<User>{
      return this.http.post<User>(this.addmemberurl+userinfo, User);
    }

    public getMembers(initId): Observable<Initiative>{
      return this.http.get<Initiative>(this.getmembersUrl+initId);
    }
  
    public setPoC(initiative: Initiative):Observable<Initiative>{
      return this.http.patch<Initiative>(this.setPoCUrl, initiative);
    }
   
  }

