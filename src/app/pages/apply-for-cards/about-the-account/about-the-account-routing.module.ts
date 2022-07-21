import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutTheAccountPage } from './about-the-account.page';

const routes: Routes = [
  {
    path: '',
    component: AboutTheAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutTheAccountPageRoutingModule {}
