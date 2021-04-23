import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { 
    
  }

  getStock()
  {
    console.log('======== Start ============');
    return this.httpClient.get<User[]>('http://localhost:8080/customers');
  }
}
