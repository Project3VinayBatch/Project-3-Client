import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Files } from '../model/files';
import { Initiative } from '../model/initiative';
import { InitiativeDTO } from '../model/initiativeDTO';

@Injectable({
  providedIn: 'root',
})
export class InitiativeService {
  private initiativePostUrl = 'http://localhost:8080/initiative';
  private initiativesGetUrl = 'http://localhost:8080/initiatives';
  private fileUploadPostUrl = 'http://localhost:8080/uploadFile/';
  private fileDownloadGetUrl = 'http://localhost:8080/files/by-initiative-id/';
  constructor(private http: HttpClient) {}

  postInitiative(initiativeDTO: InitiativeDTO): Observable<InitiativeDTO> {
    return this.http.post<InitiativeDTO>(this.initiativePostUrl, initiativeDTO);
    //checkauthsercive to get the JWT??
    //or in component?
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
}
