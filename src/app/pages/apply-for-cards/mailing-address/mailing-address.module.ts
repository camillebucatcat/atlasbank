import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MailingAddressPageRoutingModule } from './mailing-address-routing.module';

import { MailingAddressPage } from './mailing-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MailingAddressPageRoutingModule
  ],
  declarations: [MailingAddressPage]
})
export class MailingAddressPageModule {}
