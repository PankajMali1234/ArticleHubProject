import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AppUserService {
  
  url = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}
    
  login=(data:any)=>
  {
      return this.httpClient.post(this.url+"/appUser/login",data,{
      headers:new HttpHeaders().set('Content-Type',"application/json")
      });
  }
}

