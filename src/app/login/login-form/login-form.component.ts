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

  ngOnInit() {
    this.users = this.loginService.getUsers();
    console.log(this.users);
  }

  onChangeCheckbox() {
    this.isRememberAccount = !this.isRememberAccount;
  }

  onLogin() {
    // console.log(this.email, this.password, this.isRememberAccount);
    let curentUser = this.doCheckAccount(this.email, this.password);
    console.log(curentUser);
    if (curentUser) {
      this.cookieService.setCookie('token', 'okela', 7);
      this.router.navigate(['dashboard']);
    }
  }

  private doCheckAccount(email, password) {
    return this.users.filter(
      (user) => {
        (user.email === email) && 
        (user.password === password)
        return user;
      }
    )[0];
  }
}
