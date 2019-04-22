import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MaterialModule } from './../material/material.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [DashboardComponent, SidebarComponent, NavbarComponent],
  imports: [
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
