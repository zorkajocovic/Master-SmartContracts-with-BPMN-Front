import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CamundaService {
  
  constructor(private httpClient: HttpClient, private router: Router) { }

  startProcess(){
    return this.httpClient.get('http://localhost:8090/camunda/startProcess') as Observable<any>
  }
  
}
