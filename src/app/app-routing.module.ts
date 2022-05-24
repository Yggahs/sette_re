import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'rules',
    loadChildren: () => import('./rules/rules.module').then( m => m.RulesPageModule)
  },  {
    path: 'name-players',
    loadChildren: () => import('./name-players/name-players.module').then( m => m.NamePlayersPageModule)
  },
  {
    path: 'loop-gioco',
    loadChildren: () => import('./loop-gioco/loop-gioco.module').then( m => m.LoopGiocoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
