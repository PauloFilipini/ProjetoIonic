import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoCompletoPageRoutingModule } from './pedido-completo-routing.module';

import { PedidoCompletoPage } from './pedido-completo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoCompletoPageRoutingModule
  ],
  declarations: [PedidoCompletoPage]
})
export class PedidoCompletoPageModule {}
