import { NgModule } from '@angular/core';
import { StatisticsComponent } from './statistics/statistics.component';
import { MaterialModule } from './../material/material.module';
import { StatisticRoutingModule } from './statistics-routing,module';
@NgModule({
  declarations: [StatisticsComponent],
  imports: [
    MaterialModule,
    StatisticRoutingModule
  ]
})
export class StatisticsModule { }
