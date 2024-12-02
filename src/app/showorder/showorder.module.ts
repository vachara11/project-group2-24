import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoworderPageRoutingModule } from './showorder-routing.module';

import { ShoworderPage } from './showorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoworderPageRoutingModule
  ],
  declarations: [ShoworderPage]
})
export class ShoworderPageModule {}
