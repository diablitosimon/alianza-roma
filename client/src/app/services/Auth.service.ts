import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {TokenService} from "./token.service";

@Injectable()
export class AuthService {

  private loggendIn = new BehaviorSubject < boolean > (this.token.loggedIn());
  authStatus = this.loggendIn.asObservable();

  changeAuthStatus (value: boolean) {
    this.loggendIn.next(value)
  }

  constructor(
    private http: HttpClient,
    private token: TokenService) { }

  signup (data) {
    return this.http.post(`${environment.url}/signup`, data)
  }

  login (data) {
    return this.http.post(`${environment.url}/login`, data)
  }

  sendPassword (data) {
    return this.http.post(`${environment.url}/reset`, data)
  }

  changePassword (data) {
    return this.http.post(`${environment.url}/changePassword`, data)
  }
}
