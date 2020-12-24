import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CamundaService } from "../services/camunda.service";

@Component({
  selector: "app-hand-over-car",
  templateUrl: "./hand-over-car.component.html",
  styleUrls: ["./hand-over-car.component.css"],
})
export class HandOverCarComponent implements OnInit {
  camundaService: CamundaService;
  router: Router;
  formFieldsDto = [];
  formFields = [];
  processInstance = "";
  currentTaskId = "";

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

  send(data: any, form: NgForm) {
    var isSent = 0;
    if (data["sendCar"] == "") isSent = 0;
    else isSent = 1;
    
    this.camundaService.sendCar(this.currentTaskId, isSent).subscribe(
      () => {
        alert("You sent a car!");
        this.router.navigate(["home"]);
      },
      (error) => {
        console.log("Error occured " + error.message);
      }
    );
  }

  ngOnInit() {}
}
