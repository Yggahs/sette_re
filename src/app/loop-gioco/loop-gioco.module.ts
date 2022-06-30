import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoopGiocoPageRoutingModule } from './loop-gioco-routing.module';

import { LoopGiocoPage } from './loop-gioco.page';
import { TimerComponent } from '../timer/timer.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LoopGiocoPageRoutingModule],
  declarations: [LoopGiocoPage, TimerComponent],
})
export class LoopGiocoPageModule {}
