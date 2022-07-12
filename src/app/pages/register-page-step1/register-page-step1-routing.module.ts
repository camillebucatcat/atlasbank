import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPageStep1Page } from './register-page-step1.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPageStep1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageStep1PageRoutingModule {}
