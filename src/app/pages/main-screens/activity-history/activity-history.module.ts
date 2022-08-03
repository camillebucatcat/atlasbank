import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityHistoryPageRoutingModule } from './activity-history-routing.module';

import { ActivityHistoryPage } from './activity-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityHistoryPageRoutingModule
  ],
  declarations: [ActivityHistoryPage]
})
export class ActivityHistoryPageModule {}
