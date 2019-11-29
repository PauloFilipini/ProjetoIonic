import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaInicialPage } from './tela-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: TelaInicialPage
  },
  {
    path: 'login',
    loadChildren: () => import('./../login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./../cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./../home/home.module').then(m => m.HomePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaInicialPageRoutingModule {}
