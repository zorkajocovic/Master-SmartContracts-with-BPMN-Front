import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaService } from '../services/camunda.service';

@Component({
  selector: 'app-ready-car',
  templateUrl: './ready-car.component.html',
  styleUrls: ['./ready-car.component.css']
})
export class ReadyCarComponent implements OnInit {

  camundaService: CamundaService;
  router: Router;
  formFieldsDto = [];
  formFields = [];
  processInstance = "";
  currentTaskId = "";

  constructor(private service: CamundaService, private activatedRoute: ActivatedRoute, private routerr: Router) { 

    this.camundaService = service;
    this.router = routerr;

    this.activatedRoute.params.subscribe(params => {
      this.currentTaskId = params["taskId"];
    });

    let x = this.camundaService.getTask(this.currentTaskId).subscribe(
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

  send(data: any, form: NgForm) {
    var isSent = 0;
    if (data["readyCar"] == "") isSent = 0;
    else isSent = 1;
    
    this.camundaService.readyCar(this.currentTaskId, isSent).subscribe(
      (res) => {
        this.router.navigate(["home"]);
      },
      (error) => {
        console.log("Error occured " + error.message);
      }
    );
  }
  
  ngOnInit() {
  }

}
