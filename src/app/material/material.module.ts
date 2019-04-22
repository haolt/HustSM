import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule
} from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule
];

@NgModule({
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
