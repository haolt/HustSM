import { Component, OnInit } from '@angular/core';
import { DivisionsService } from '../divisions/divisions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private divisionsService: DivisionsService
  ) { }

  hasOpened = false;

  ngOnInit() {
    if (localStorage.getItem('divisions') === null) {
      this.divisionsService.getAllDivisions().subscribe(
        (res) => {
          localStorage.setItem('divisions', JSON.stringify(res));
          console.log(res);
        },
        (err) => {
          this.divisionsService.handleError(err);
        }
      );
    }
  }

  log(state) {
    // console.log(state);
  }

}
