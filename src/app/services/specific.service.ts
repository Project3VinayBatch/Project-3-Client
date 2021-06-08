import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Files } from './model/files';

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
    this.getmembersUrl="";
    this.postmembersUrl="";
    this.addmemberurl="";
   }

    
            
    
  
  
  
    public getFiles(): Observable<Files[]>{
      return this.http.get<Files[]>(this.getfilesUrl);
    }

    public postFiles(): Observable<Files[]>{
      return this.http.get<Files[]>(this.getfilesUrl);
    }

    public getMembers(): Observable<Files[]>{
      return this.http.get<Files[]>(this.getfilesUrl);
    }

    public postMembers(): Observable<Files[]>{
      return this.http.get<Files[]>(this.getfilesUrl);
    }

    public addMembers(): Observable<Files[]>{
      return this.http.get<Files[]>(this.getfilesUrl);
    }
  
   
  }

