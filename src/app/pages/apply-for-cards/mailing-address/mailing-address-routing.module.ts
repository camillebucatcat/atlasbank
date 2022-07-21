import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailingAddressPage } from './mailing-address.page';

const routes: Routes = [
  {
    path: '',
    component: MailingAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MailingAddressPageRoutingModule {}
