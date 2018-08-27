import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../services/Auth.service";
import {SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  public error = [];

  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null
  };

  constructor(
    private route: ActivatedRoute,
    private service: AuthService,
    private router: Router,
    private Notify: SnotifyService
  ) {
    route.queryParams.subscribe(params => {
        this.form.resetToken = params['token']
    });
  }

  onSubmit() {
    this.service.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data) {

    let _router = this.router;
    this.Notify.confirm('Felicidades!, La contraseña se cambio correctamente', {
      buttons: [
        {
          text: 'Okay',
          action: toster => {
            _router.navigateByUrl('/login'),
              this.Notify.remove(toster.id)
          }
        },
      ]
    })

  }

  handleError(error) {
    error => this.Notify.error(error.error.error, {timeout:6000})
    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}
