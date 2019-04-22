import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';

const loginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        component: LoginFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
