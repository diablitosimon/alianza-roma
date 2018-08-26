import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/Auth.service";
import {SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  public form = {
    email: null
  };

  public error = null;

  constructor(
    private service: AuthService,
    private notify: SnotifyService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.notify.info('Procesado su petición', {timeout:3000})
    this.service.sendPassword(this.form)
      .subscribe(data => this.handleResponse(data),
        error => this.notify.error(error.error.error, {timeout:6000})
      )
  }

  handleResponse (res) {
    this.notify.success(res.data, {timeout:0})
    this.form.email = null;
  }
}
