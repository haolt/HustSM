import { Component, OnInit } from '@angular/core';

import { CookieService } from '../../core/cookie.service';
import { TokenService } from '../token.service';
import { User } from '../user.class';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public currentUser: User;

  constructor(
    private cookieService: CookieService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    if (this.cookieService.getCookie('token')) {
      const token = this.cookieService.getCookie('token');
      // console.log(token);
      this.tokenService.getInfoByToken(token).subscribe(
        (data: User) => {
          // console.log(data);
          this.currentUser = data;
        }
      );
    }
  }

}
