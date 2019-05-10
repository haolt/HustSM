import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [
    LoginRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class LoginModule { }
