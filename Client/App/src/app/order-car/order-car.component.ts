import { Component, OnInit } from '@angular/core';
import { CamundaService } from '../services/camunda.service';
import { Router } from '@angular/router';
import { EthereumService } from '../services/ethereum.service';
import { NgForm } from '@angular/forms';
import { OrderDto } from '../model/OrderDto';

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
  router: Router;

  constructor(camundaService: CamundaService, ethereumService: EthereumService, router: Router) { 
    
    this.camundaService = camundaService;
    this.ethereumService = ethereumService;
    this.router = router;
    
    let x = this.camundaService.startClientProcess().subscribe(
      res => {
        debugger
        this.formFieldsDto = res;
        this.formFields = res.formField;
        this.processInstance = res.processInstanceId;
        this.currentTaskId = res.taskId;
        /*ethereumService.initConnection().subscribe(
          res => {s
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
        });*/
      },
      () => {
        console.log("Error occured");
      }
    );
  }

  ngOnInit() {
  }

  orderCar(orderCar: OrderDto, form: NgForm){   

    this.camundaService.orderCar(this.currentTaskId, orderCar).subscribe(
      res => {
        alert("naruceno auto");
        this.router.navigate(['home']);
      },
      error => {
        console.log("Error occured " + error.message);
      }
    );
  }


}
