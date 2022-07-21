import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutTheAccountPageRoutingModule } from './about-the-account-routing.module';

import { AboutTheAccountPage } from './about-the-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutTheAccountPageRoutingModule
  ],
  declarations: [AboutTheAccountPage]
})
export class AboutTheAccountPageModule {}
