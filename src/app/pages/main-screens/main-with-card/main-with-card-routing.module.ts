import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainWithCardPage } from './main-with-card.page';

const routes: Routes = [
  {
    path: '',
    component: MainWithCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainWithCardPageRoutingModule {}
