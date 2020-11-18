import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaService } from '../services/camunda.service';
import { OfferDto } from '../model/OfferDto';

@Component({
  selector: 'app-send-offer',
  templateUrl: './send-offer.component.html',
  styleUrls: ['./send-offer.component.css']
})
export class SendOfferComponent implements OnInit {

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
        debugger
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
  
  sendOffer(orderCar: OfferDto, form: NgForm){   

    this.camundaService.sendOffer(this.currentTaskId, orderCar).subscribe(
      res => {
        alert("Sent offer to client!");
        this.router.navigate(['home']);
      },
      error => {
        console.log("Error occured " + error.message);
      }
    );
  }


}
