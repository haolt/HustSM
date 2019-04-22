import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { SidebarComponent } from './sidebar/sidebar.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // children: [
    //   {
    //     path: '',
    //     component: LoginFormComponent
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
