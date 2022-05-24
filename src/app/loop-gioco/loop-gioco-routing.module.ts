import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoopGiocoPage } from './loop-gioco.page';

const routes: Routes = [
  {
    path: '',
    component: LoopGiocoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoopGiocoPageRoutingModule {}
