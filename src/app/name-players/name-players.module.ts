import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NamePlayersPageRoutingModule } from './name-players-routing.module';

import { NamePlayersPage } from './name-players.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NamePlayersPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [NamePlayersPage],
})
export class NamePlayersPageModule {}
