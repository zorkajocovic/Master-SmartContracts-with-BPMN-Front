import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaService } from '../services/camunda.service';

@Component({
  selector: 'app-pay-component',
  templateUrl: './pay-component.component.html',
  styleUrls: ['./pay-component.component.css']
})
export class PayComponentComponent implements OnInit {

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

pay(){
  this.camundaService.pay(this.currentTaskId, this.formFields[0].value.value).subscribe(
    res => {
      alert("You have payed a rent!");
      this.router.navigate(["home"]);
    },
    () => {
      console.log("Error occured");
    }
  );
}

  ngOnInit() {
  }

}
