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
import {RoutingModule} from './/routing.module';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        SignupComponent,
        ProfileComponent,
        ResetComponent,
        ResponseComponent
    ],
    imports: [
        BrowserModule,
        RoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
