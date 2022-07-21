import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyForCardsPageRoutingModule } from './apply-for-cards-routing.module';

import { ApplyForCardsPage } from './apply-for-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyForCardsPageRoutingModule
  ],
  declarations: [ApplyForCardsPage]
})
export class ApplyForCardsPageModule {}
