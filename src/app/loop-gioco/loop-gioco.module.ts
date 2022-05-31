import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoopGiocoPageRoutingModule } from './loop-gioco-routing.module';

import { LoopGiocoPage } from './loop-gioco.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LoopGiocoPageRoutingModule],
  declarations: [LoopGiocoPage],
})
export class LoopGiocoPageModule {}
