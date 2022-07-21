import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakeSelfiePage } from './take-selfie.page';

const routes: Routes = [
  {
    path: '',
    component: TakeSelfiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakeSelfiePageRoutingModule {}
