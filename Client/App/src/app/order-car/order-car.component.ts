import { Component, OnInit } from '@angular/core';
import { CamundaService } from '../services/camunda.service';
import { Router } from '@angular/router';
import { EthereumService } from '../services/ethereum.service';

@Component({
  selector: 'app-order-car',
  templateUrl: './order-car.component.html',
  styleUrls: ['./order-car.component.css']
})
export class OrderCarComponent implements OnInit {

  camundaService: CamundaService;
  ethereumService: EthereumService;
  formFieldsDto = [];
  formFields = [];
  processInstance = "";
  currentTaskId = "";

  constructor(camundaService: CamundaService, ethereumService: EthereumService, router: Router) { 
    
    this.camundaService = camundaService;
    this.ethereumService = ethereumService;

    let x = this.camundaService.startProcess().subscribe(
      res => {
        this.formFieldsDto = res;
        this.formFields = res.formField;
        this.processInstance = res.processInstanceId;
        this.currentTaskId = res.taskId;
        ethereumService.initConnection().subscribe(
          res => {
            alert("Successfully connected on the Ethereum node!");
            ethereumService.deployContract().subscribe(
              res => {
                alert("Deployed contract! Address: " + res);
            },
            () => 
            {
              alert("Error with deploying contract!")
            });
        },
        () => 
        {
          alert("Error with connecting on the Ethereum node!")
        });
      },
      () => {
        console.log("Error occured");
      }
    );
  }

  ngOnInit() {
  }

}
