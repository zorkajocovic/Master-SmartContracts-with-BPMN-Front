import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { IsClient } from "../guards/client.guard";
import { IsDealer } from "../guards/dealer.guard";
import { LoginService } from "../services/login.service";
import { IsLogged } from "../guards/isLogged.guard";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  loginService: LoginService;
  loggedIn: boolean;
  loggedClient: IsClient;
  loggedDealer: IsDealer;

  constructor(
    private logged: IsLogged,
    private isClient: IsClient,
    private isDealer: IsDealer,
    private service: LoginService,
    private router: Router
  ) {
    this.service.currentLoginState.subscribe(
      (loggedIn) => (this.loggedIn = loggedIn)
    );
    this.loggedClient = isClient;
    this.loggedDealer = isDealer;
  }

  ngOnInit() {
    this.loggedIn = this.logged.canActivate();
  }

  logOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("role");
    this.loggedIn = this.logged.canActivate();
    this.router.navigate(["login"]);
  }

  isloggedClient() {
    return this.isClient.canActivate();
  }

  isLoggedDealer() {
    return this.isDealer.canActivate();
  }
}
