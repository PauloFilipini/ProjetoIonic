import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CarrinhoPageRoutingModule } from './carrinho-routing.module';

import { CarrinhoPage } from './carrinho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrinhoPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CarrinhoPage]
})
export class CarrinhoPageModule {}
