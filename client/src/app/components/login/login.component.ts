import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/Auth.service";
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor(
    private services: AuthService,
    private token: TokenService,
    private router: Router) {
  }

  onSubmit() {
    this.services.login(this.form)
      .subscribe(data => this.handleResponse(data),
        error => this.handleError(error))
  };

  handleError(error) {
    this.error = error.error.error;
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.services.changeAuthStatus(true);
    this.router.navigateByUrl('profile');
  }

  ngOnInit() {
  }

}
