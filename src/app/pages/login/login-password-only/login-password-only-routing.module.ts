import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPasswordOnlyPage } from './login-password-only.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPasswordOnlyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPasswordOnlyPageRoutingModule {}
