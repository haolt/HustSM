import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './request/request.component';
import { RequestListComponent } from './request-list/request-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RequestAddComponent } from './request-add/request-add.component';
import { RequestInfoComponent } from './request-info/request-info.component';

@NgModule({
  declarations: [
    RequestComponent,
    RequestListComponent,
    RequestAddComponent,
    RequestInfoComponent
  ],
  imports: [
    MaterialModule,
    RequestRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    RequestInfoComponent,
    RequestListComponent,
    RequestAddComponent
  ]
})
export class RequestModule { }
