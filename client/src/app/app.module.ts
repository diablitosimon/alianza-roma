import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ResetComponent} from './components/password/reset/reset.component';
import {ResponseComponent} from './components/password/response/response.component';
import {RoutingModule} from './routing.module';
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/Auth.service";
import {TokenService} from "./services/token.service";
import {ActivateService} from "./services/activate.service";
import {InActivateService} from "./services/in-activate.service";
import {SnotifyModule, SnotifyService, ToastDefaults} from "";
import { FormsComponent } from './components/forms/forms.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    ResetComponent,
    ResponseComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule
  ],
  providers: [AuthService, TokenService, ActivateService, InActivateService,
    {provide: 'SnotifyToastConfig', useValue: ToastDefaults}, SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
