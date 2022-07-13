import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPasswordOnlyPageRoutingModule } from './login-password-only-routing.module';

import { LoginPasswordOnlyPage } from './login-password-only.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPasswordOnlyPageRoutingModule
  ],
  declarations: [LoginPasswordOnlyPage]
})
export class LoginPasswordOnlyPageModule {}
