import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EthereumService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  initConnection(){
    return this.httpClient.get('http://localhost:8090/ethereum/initConnection') as Observable<any>
  }

  deployContract(){
    return this.httpClient.get('http://localhost:8090/ethereum/deployContract') as Observable<any>
  }

}
