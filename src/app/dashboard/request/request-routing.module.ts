import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestComponent } from './request/request.component';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestAddComponent } from './request-add/request-add.component';

const routes: Routes = [
  {
    path: '',
    component: RequestComponent,
    children: [
      {
        path: '',
        component: RequestListComponent
      },
      {
        path: 'add',
        component: RequestAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
