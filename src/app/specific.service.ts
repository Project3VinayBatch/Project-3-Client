import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecificService {
  private backendUrl: string;
  constructor(private http: HttpClient) {
    this.backendUrl = "";
   }

    
            
    
  
  
  
    public callToBackEnd(){}
  
   
  }

