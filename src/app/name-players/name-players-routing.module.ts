import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NamePlayersPage } from './name-players.page';

const routes: Routes = [
  {
    path: '',
    component: NamePlayersPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NamePlayersPageRoutingModule {}
