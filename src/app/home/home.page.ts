import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Autenticacao } from '../services/autenticacao.service';
import { Restaurantes } from './../module/restaurante.model'
import { ItemCarrinho } from '../module/item-carrinho.model'
import { RestaurantesService } from '../services/restaurantes.service';
import {CarrinhoService} from '../services/carrinho.service'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [RestaurantesService]
  
})
export class HomePage {
  public itensCarrinho: ItemCarrinho[] = []


  public restaurantes: Restaurantes[]
  constructor(private autenticacao:Autenticacao,
    private router: Router,
    private RestaurantesService: RestaurantesService,
    private carrinhoService: CarrinhoService) {}
    
  ngOnInit() {
    this.RestaurantesService.getRestaurantes()
    .then((restaurantes: Restaurantes[] )  => {
       this.restaurantes = restaurantes
    })
    .catch((err) =>{
      console.log(err)
    })


  }
  ngOnDestroy() {
   this.autenticacao.token_id
  }
  
  logoff() {
    this.autenticacao.sair()
  }
}
