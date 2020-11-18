import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CamundaService {
  
  constructor(private httpClient: HttpClient, private router: Router) { }

  startClientProcess(){
    return this.httpClient.get('http://localhost:8090/api/camunda/startClientProcess') as Observable<any>
  }
  
  getTasksForUser(){
    return this.httpClient.get('http://localhost:8090/api/camunda/getTasksForUser') as Observable<any>
  }

  getTasks(processInstanceId : string){
    return this.httpClient.get('http://localhost:8090/camunda/get/tasks/'.concat(processInstanceId)) as Observable<any>
  }

  getTask(taskId : string){
    return this.httpClient.get('http://localhost:8090/api/camunda/get/'.concat(taskId)) as Observable<any>
  }

  claimTask(taskId){
    return this.httpClient.post('http://localhost:8090/camunda/tasks/claim/'.concat(taskId), null) as Observable<any>
  }

  orderCar(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/camunda/orderCar/'.concat(taskId), data) as Observable<any>
  }
  
  sendOffer(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/camunda/getSendOfferForm/'.concat(taskId), data) as Observable<any>
  }

  sendDocuments(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/camunda/sendDocuments/'.concat(taskId), data) as Observable<any>
  }

  readDocuments(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/camunda/readDocuments/'.concat(taskId), data) as Observable<any>
  }

  readReceipt(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/camunda/readReceipt/'.concat(taskId), data) as Observable<any>
  }

  sendReceipt(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/camunda/sendReceipt/'.concat(taskId), data) as Observable<any>
  }

  decide(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/camunda/decide/'.concat(taskId), data) as Observable<any>
  }

  sign(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/camunda/sign/'.concat(taskId), data) as Observable<any>
  }

  pay(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/camunda/pay/'.concat(taskId), data) as Observable<any>
  }

  handOver(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/camunda/handOverCar/'.concat(taskId), data) as Observable<any>
  }

  pickup(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/camunda/pickup/'.concat(taskId), data) as Observable<any>
  }
}
