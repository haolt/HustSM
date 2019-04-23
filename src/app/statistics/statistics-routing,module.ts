import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent } from './statistics/statistics.component';

const statisticRoutes: Routes = [
  {
    path: '',
    component: StatisticsComponent,
    // children: [
    //   {
    //     path: '',
    //     component: LoginFormComponent
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(statisticRoutes)],
  exports: [RouterModule]
})
export class StatisticRoutingModule { }
