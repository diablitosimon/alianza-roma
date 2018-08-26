import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ResetComponent} from "./components/password/reset/reset.component";
import {ActivateService} from "./services/activate.service";
import {InActivateService} from "./services/in-activate.service";
import {ResponseComponent} from "./components/password/response/response.component";

const appRoutes: Routes = [
    {
      path: 'login',
      component: LoginComponent,
      canActivate: [InActivateService]
    },
    {
      path: 'signup',
      component: SignupComponent,
      canActivate: [InActivateService]
    },
    {
      path: 'profile',
      component: ProfileComponent,
      canActivate: [ActivateService]
    },
    {
      path: 'reset',
      component: ResetComponent,
    },
    {
      path: 'response',
      component: ResponseComponent,
      canActivate: [InActivateService]
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
