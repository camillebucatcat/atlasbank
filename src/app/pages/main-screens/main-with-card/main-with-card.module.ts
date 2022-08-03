import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainWithCardPageRoutingModule } from './main-with-card-routing.module';

import { MainWithCardPage } from './main-with-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainWithCardPageRoutingModule
  ],
  declarations: [MainWithCardPage]
})
export class MainWithCardPageModule {}
