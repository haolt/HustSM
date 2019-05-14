import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
// the `default as` syntax.
import * as _moment from 'moment';
// // tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';
import { Division } from '../../divisions/division.class';

const moment = _rollupMoment || _moment;

export const HSM_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-announcement-search',
  templateUrl: './announcement-search.component.html',
  styleUrls: ['./announcement-search.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: HSM_FORMATS},
  ],
})

export class AnnouncementSearchComponent implements OnInit {

  exampleForm = new FormGroup ({
    keywords: new FormControl(''),
    division: new FormControl(),
    // selectedCus: new FormControl('option2'),
    fromDate: new FormControl(),
    toDate: new FormControl(moment())
  });
  divisions: Division[];
  // selected = 'option2';
  constructor() {}
  ngOnInit() {
    this.divisions = JSON.parse(localStorage.getItem('divisions'));
  }
  onSubmit() {
    console.log(this.exampleForm.value);
  }
}
