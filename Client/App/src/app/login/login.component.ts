import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequestDto } from '../model/LoginRequestDto';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logService: LoginService;

  constructor(private service: LoginService, private router: Router) {
    this.logService = service;
   }

  ngOnInit() {
  }
  
  logIn(user: LoginRequestDto, form: NgForm) {
    debugger
    this.logService.getTheToken(user);
    form.reset();
  }

}
