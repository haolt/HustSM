import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

import { AnnouncementRoutingModule } from './announcement-routing.module';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnnouncementListComponent } from './announcement-list/announcement-list.component';
import { AnnouncementAddComponent } from './announcement-add/announcement-add.component';

import { MaterialModule } from './../../material/material.module';

import { AnnouncementSearchComponent } from './announcement-search/announcement-search.component';
import { DivisionsModule } from '../divisions/divisions.module';

@NgModule({
  declarations: [AnnouncementComponent, AnnouncementListComponent, AnnouncementAddComponent, AnnouncementSearchComponent],
  imports: [
    MaterialModule,
    AnnouncementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DivisionsModule,
    CommonModule,
    RichTextEditorAllModule
  ]
})
export class AnnouncementModule { }
