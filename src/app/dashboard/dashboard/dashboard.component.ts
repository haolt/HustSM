import { Component, OnInit } from '@angular/core';
import { CookieService } from '../../core/cookie.service';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private dashboardService: DashboardService
  ) { }

  hasOpened = false;
  public token: string;

  ngOnInit() {
    if (this.cookieService.getCookie('token')) {
      this.token = this.cookieService.getCookie('token');
      console.log(this.token);
      this.dashboardService.getInfoByToken(this.token).subscribe(
        (data) => {
          console.log(data);
        }
      );
    }
  }

  log(state) {
    // console.log(state);
  }

}
