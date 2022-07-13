import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginInputValidationPage } from './login-input-validation.page';

const routes: Routes = [
  {
    path: '',
    component: LoginInputValidationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginInputValidationPageRoutingModule {}
