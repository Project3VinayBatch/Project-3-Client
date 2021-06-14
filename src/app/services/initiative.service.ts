import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  private fileUploadPostUrl = 'http://localhost:8080/uploadFile/';
  private fileDownloadGetUrl = 'http://localhost:8080/files/by-initiative-id/';
  private UserGetUrl = 'http://localhost:8080/user';
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

  //File Requests
  postFile(
    file: File,
    username: string,
    initiativeId: number
  ): Observable<HttpEvent<{}>> {
    const data = new FormData();
    data.append('file', file);
    const request = new HttpRequest(
      'POST',
      this.fileUploadPostUrl + username + '/' + initiativeId,
      data,
      {
        reportProgress: true,
        responseType: 'text',
      }
    );

    return this.http.request(request);
  }

  getFile(initiativeId: number): Observable<Files[]> {
    return this.http.get<Files[]>(this.fileDownloadGetUrl + initiativeId);
  }
  getUser(): Observable<User> {
    return this.http.get<User>(this.UserGetUrl);
  }
}
