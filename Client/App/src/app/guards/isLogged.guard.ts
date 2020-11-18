import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class IsLogged implements CanActivate {

  constructor() {}

  canActivate() {
    return localStorage.jwt ? true : false;
  }
}