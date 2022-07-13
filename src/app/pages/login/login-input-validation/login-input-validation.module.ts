import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginInputValidationPageRoutingModule } from './login-input-validation-routing.module';

import { LoginInputValidationPage } from './login-input-validation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginInputValidationPageRoutingModule
  ],
  declarations: [LoginInputValidationPage]
})
export class LoginInputValidationPageModule {}
