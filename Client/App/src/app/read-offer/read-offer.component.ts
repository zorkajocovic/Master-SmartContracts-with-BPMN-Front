import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CamundaService } from "../services/camunda.service";

@Component({
  selector: "app-read-offer",
  templateUrl: "./read-offer.component.html",
  styleUrls: ["./read-offer.component.css"],
})
export class ReadOfferComponent implements OnInit {
  
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

  decide(accepted) {
    if (accepted == true) {
      this.service.decide(this.currentTaskId, 1).subscribe((res) => {
        alert("Contract accepted!");
        this.router.navigate(['home']);
      });
    } else {
      this.service.decide(this.currentTaskId, 0).subscribe((res) => {
        alert("Contract refused!");
      });
    }
  }

  ngOnInit() {}
}
