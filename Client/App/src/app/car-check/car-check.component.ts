import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaService } from '../services/camunda.service';

@Component({
  selector: 'app-car-check',
  templateUrl: './car-check.component.html',
  styleUrls: ['./car-check.component.css']
})
export class CarCheckComponent implements OnInit {

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
    var isDamaged = 0;
    if (data["hasDamage"] == "") isDamaged = 0;
    else isDamaged = 1;
    
    this.camundaService.carCheck(this.currentTaskId, isDamaged).subscribe(
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
