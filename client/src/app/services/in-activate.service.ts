import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {TokenService} from "./token.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class InActivateService implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return !this.token.loggedIn();
  }

  constructor(private token: TokenService) { }

}
