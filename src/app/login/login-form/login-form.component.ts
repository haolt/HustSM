import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { CookieService } from '../../core/cookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public email: string;
  public password: string;
  public hide = true;
  public isRememberAccount = false;
  users;
  constructor(
    private loginService: LoginService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() { }

  onChangeCheckbox() {
    this.isRememberAccount = !this.isRememberAccount;
  }

  onLogin() {
    console.log('Params: ', this.email, this.password, this.isRememberAccount);
    this.loginService.doLogin(this.email, this.password).subscribe(
      (res) => {
        console.log(res);
        this.cookieService.setCookie('token', res.token, 7);
      },
      (err) => {
        this.loginService.handleError(err);
      }
    );
    this.router.navigate(['dashboard']);
  }
}
