import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyForCardsPage } from './apply-for-cards.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyForCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyForCardsPageRoutingModule {}
