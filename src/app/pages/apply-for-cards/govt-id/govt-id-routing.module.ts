import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GovtIdPage } from './govt-id.page';

const routes: Routes = [
  {
    path: '',
    component: GovtIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GovtIdPageRoutingModule {}
