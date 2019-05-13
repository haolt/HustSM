import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnnouncementListComponent } from './announcement-list/announcement-list.component';
import { AnnouncementAddComponent } from './announcement-add/announcement-add.component';

const routes: Routes = [
  {
    path: '',
    component: AnnouncementComponent,
    children: [
      {
        path: '',
        component: AnnouncementListComponent
      },
      {
        path: 'add',
        component: AnnouncementAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementRoutingModule { }
