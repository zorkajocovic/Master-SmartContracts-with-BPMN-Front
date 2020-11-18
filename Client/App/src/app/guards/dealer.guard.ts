import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class IsDealer implements CanActivate {

  constructor() {}

  canActivate() {
    return localStorage.role == 'DEALER';
  }
}