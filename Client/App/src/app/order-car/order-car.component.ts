import { Component, OnInit } from '@angular/core';
import { CamundaService } from '../services/camunda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-car',
  templateUrl: './order-car.component.html',
  styleUrls: ['./order-car.component.css']
})
export class OrderCarComponent implements OnInit {

  camundaService: CamundaService;
  formFieldsDto = [];
  formFields = [];
  processInstance = "";
  currentTaskId = "";

  constructor(camundaService: CamundaService, router: Router) { 
    this.camundaService = camundaService;

    let x = this.camundaService.startProcess().subscribe(
      res => {
        this.formFieldsDto = res;
        this.formFields = res.formField;
        this.processInstance = res.processInstanceId;
        this.currentTaskId = res.taskId;
      },
      () => {
        console.log("Error occured");
      }
    );
  }

  ngOnInit() {
  }

}
