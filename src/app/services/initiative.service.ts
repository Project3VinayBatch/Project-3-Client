import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Files } from '../model/files';
import { Initiative } from '../model/initiative';
import { InitiativeDTO } from '../model/initiativeDTO';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class InitiativeService {
  private initiativePostUrl = 'http://localhost:8080/initiative';
  private initiativesGetUrl = 'http://localhost:8080/initiatives';
  private fileUploadPostUrl = 'http://localhost:8080/uploadfile/';
  private fileDownloadGetUrl = 'http://localhost:8080/files/by-initiative-id/';
  private UserGetUrl = 'http://localhost:8080/user';

  //curent initiative info
  private initiativeSource = new BehaviorSubject<Initiative>(new Initiative());
  currentInitiative = this.initiativeSource.asObservable();

  private userSource = new BehaviorSubject<User>(new User()); //Im worried this wil lcover user with a new user object
  currentUser = this.userSource.asObservable();

  //Constructor
  constructor(private http: HttpClient) {}

  postInitiative(initiative: {
    createdBy: number;
    title: string;
    description: string;
  }) {
    this.http
      .post(this.initiativePostUrl, {
        createdBy: 56387421,
        title: initiative.title,
        description: initiative.description,
      })
      .subscribe(
        (val) => {
          console.log('POST call successful value returned in body', val);
        },
        (response) => {
          console.log('POST call in error', response);
        },
        () => {
          console.log('The POST observable is now completed');
        }
      );
  }

  getInitiatives(): Observable<Initiative[]> {
    return this.http.get<Initiative[]>(this.initiativesGetUrl);
  }
  //WIP
  getCurrentInitiative(): Initiative {
    //gets initiative info from
    // return this.http.get<Initiative[]>(this.initiativesGetUrl);
    return this.initiativeSource.getValue();
    //this is not returning files and members. We need to call backend for that.
  }
  getUpdatedCurrentInitiative() {
    //does nothing yet
    //this should call api and update initiative info
    //because currentinitiative does not include file and member info
  }
  saveCurrentInitiative(initiative: Initiative): void {
    //called in all-initiative component before routing to specific initiative
    this.initiativeSource.next(initiative); //adds new info into the behaviorsubject, basically saving it
  }
  //end WIP
  //File Requests
  postFile(
    file: File,
    username: string,
    initiativeId: number
  ): Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest(
      'POST',
      this.fileUploadPostUrl + username + '/' + initiativeId,
      data,
      { reportProgress: true, responseType: 'text' }
    );
    return this.http.request(newRequest);
  }

  getFile(initiativeId: number): Observable<Files[]> {
    return this.http.get<Files[]>(this.fileDownloadGetUrl + initiativeId);
  }
  getUser(): Observable<User> {
    return this.http.get<User>(this.UserGetUrl);
  }
}
