import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageStep1PageRoutingModule } from './register-page-step1-routing.module';

import { RegisterPageStep1Page } from './register-page-step1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageStep1PageRoutingModule
  ],
  declarations: [RegisterPageStep1Page]
})
export class RegisterPageStep1PageModule {}
