import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TakeSelfiePageRoutingModule } from './take-selfie-routing.module';

import { TakeSelfiePage } from './take-selfie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakeSelfiePageRoutingModule
  ],
  declarations: [TakeSelfiePage]
})
export class TakeSelfiePageModule {}
