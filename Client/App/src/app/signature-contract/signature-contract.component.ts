import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaService } from '../services/camunda.service';

@Component({
  selector: 'app-signature-contract',
  templateUrl: './signature-contract.component.html',
  styleUrls: ['./signature-contract.component.css']
})
export class SignatureContractComponent implements OnInit {
  
  camundaService: CamundaService;
  router: Router;
  formFieldsDto = [];
  formFields = [];
  processInstance = "";
  currentTaskId = "";
  fullname = "";

  constructor(
    private service: CamundaService,
    private activatedRoute: ActivatedRoute,
    private routerr: Router
  ) {
    this.camundaService = service;
    this.router = routerr;

    this.activatedRoute.params.subscribe((params) => {
      this.currentTaskId = params["taskId"];
    });
debugger
    this.camundaService.getTask(this.currentTaskId).subscribe(
      (res) => {
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

  sign() {
    this.service.sign(this.currentTaskId, this.formFields[0].value.value).subscribe((res) => {
      alert("Contract accepted!");
      this.router.navigate(["home"]);
    });
  }
  ngOnInit() {
  }

}
