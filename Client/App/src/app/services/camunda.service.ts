import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CamundaService {
  
  constructor(private httpClient: HttpClient, private router: Router) { }
  
  getTasksForUser(){
    return this.httpClient.get('http://localhost:8090/api/camunda/getTasksForUser') as Observable<any>
  }

  getTasks(processInstanceId : string){
    return this.httpClient.get('http://localhost:8090/camunda/get/tasks/'.concat(processInstanceId)) as Observable<any>
  }

  getTask(taskId : string){
    return this.httpClient.get('http://localhost:8090/api/camunda/get/'.concat(taskId)) as Observable<any>
  }
  
  sendOffer(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/dealer/submitSendOfferForm/'.concat(taskId), data) as Observable<any>
  }

  sendDocuments(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/dealer/sendDocuments/'.concat(taskId), data) as Observable<any>
  }

  confirmPayment(taskId: string){
    return this.httpClient.get('http://localhost:8090/api/dealer/confirmPayment/'.concat(taskId)) as Observable<any>
  }

  sendReceipt(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/dealer/sendReceipt/'.concat(taskId), data) as Observable<any>
  }

  sendCar(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/dealer/sendCar/'.concat(taskId), data) as Observable<any>
  }
  
  sign(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/dealer/sign/'.concat(taskId), data) as Observable<any>
  }

  readyCar(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/dealer/readyCar/'.concat(taskId), data) as Observable<any>
  }

  calcDamagePrice(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/dealer/calcDamagePrice/'.concat(taskId), data) as Observable<any>
  }
  carCheck(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/dealer/carCheck/'.concat(taskId), data) as Observable<any>
  }

  decide(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/client/decide/'.concat(taskId), data) as Observable<any>
  }

  pay(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/client/pay/'.concat(taskId), data) as Observable<any>
  }

  pickup(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/client/pickup/'.concat(taskId), data) as Observable<any>
  }

  returnCar(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/client/returnCar/'.concat(taskId), data) as Observable<any>
  }

  orderCar(taskId: string, data: any){
    return this.httpClient.post('http://localhost:8090/api/client/orderCar/'.concat(taskId), data) as Observable<any>
  }

  startClientProcess(){
    return this.httpClient.get('http://localhost:8090/api/client/startClientProcess') as Observable<any>
  }
}
