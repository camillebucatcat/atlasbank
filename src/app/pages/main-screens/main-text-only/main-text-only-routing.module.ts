import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainTextOnlyPage } from './main-text-only.page';

const routes: Routes = [
  {
    path: '',
    component: MainTextOnlyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainTextOnlyPageRoutingModule {}
