import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoCompletoPage } from './pedido-completo.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoCompletoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoCompletoPageRoutingModule {}
