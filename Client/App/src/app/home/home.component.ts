import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TaskDto } from '../model/TaskDto';
import { CamundaService } from "../services/camunda.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {

  private camundaService: CamundaService;
  private router: Router;
  private taskList = [];
  private currentTaskId: string;
  private formFields = [];

  constructor(camundaService: CamundaService, router: Router) {
    this.camundaService = camundaService;
    this.router = router;

    let x = this.camundaService.getTasksForUser().subscribe(
      (res) => {
        this.taskList = res;
        this.formFields = res.formField;
        this.currentTaskId = res.taskId;
      },
      () => {
        console.log("Error occured");
      }
    );
  }

  ngOnInit() {}
  
  getTask(task: TaskDto) {
    if (task.name == "Hand over a car") {
      this.router.navigate(['handover-car/'.concat(task.taskId)]);
    } 
    if (task.name == "Send contract to client") {
      this.router.navigate(['send-offer/'.concat(task.taskId)]);
    } 
    else if(task.name == "Get contract"){
      this.router.navigate(['read-offer/'.concat(task.taskId)]);
    }
    else if(task.name == "Order car"){
      this.router.navigate(['order-car/'.concat(task.taskId)]);
    }
    else if(task.name == "Sign contract"){
      this.router.navigate(['sign-contract/'.concat(task.taskId)]);
    }
    else if(task.name == "Confirm that you have read car documents"){
      this.router.navigate(['read-documents/'.concat(task.taskId)]);
    }
    else if(task.name == "Confirm that you have read a receipt"){
      this.router.navigate(['read-receipt/'.concat(task.taskId)]);
    }
    else if(task.name == "Send documents"){
      this.router.navigate(['send-documents/'.concat(task.taskId)]);
    }
    else if(task.name == "Send receipt"){
      this.router.navigate(['send-receipt/'.concat(task.taskId)]);
    }
    else if(task.name == "Start payment transaction"){
      this.router.navigate(['pay/'.concat(task.taskId)]);
    }
    else if(task.name == "Pick up a car"){
      this.router.navigate(['pickup-car/'.concat(task.taskId)]);
    }
     else if(task.name == "Confirm client's payment"){
      this.router.navigate(['confirm-payment/'.concat(task.taskId)]);
    }
    else if(task.name == "Car is ready"){
      this.router.navigate(['ready-car/'.concat(task.taskId)]);
    }
  }

}
