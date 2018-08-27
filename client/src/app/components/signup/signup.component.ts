import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/Auth.service";
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null,
  };
  public error = [];

  constructor(
    private service: AuthService,
    private token: TokenService,
    private router: Router) {
  }

  onSubmit() {
    this.service.signup(this.form)
      .subscribe(data => this.handleResponse(data),
        error => this.handleError(error))
  };

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.router.navigateByUrl('profile');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}
