import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ResetComponent} from "./components/password/reset/reset.component";

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent },
    {path: 'signup', component: SignupComponent },
    {path: 'profile', component: ProfileComponent},
    {path: 'reset-password', component: ResetComponent},
    {path: 'response-password', component: ResetComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
