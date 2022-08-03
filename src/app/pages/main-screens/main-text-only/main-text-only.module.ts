import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainTextOnlyPageRoutingModule } from './main-text-only-routing.module';

import { MainTextOnlyPage } from './main-text-only.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainTextOnlyPageRoutingModule
  ],
  declarations: [MainTextOnlyPage]
})
export class MainTextOnlyPageModule {}
