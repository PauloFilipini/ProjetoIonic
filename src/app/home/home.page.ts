import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Autenticacao } from './../autenticacao.service';
import { Restaurantes } from './../module/restaurante.model'
import { RestaurantesService } from './../restaurantes.service';
import {CarrinhoService} from './../carrinho.service'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [RestaurantesService]
  
})
export class HomePage {

  public restaurantes: Restaurantes[]
  soma
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

    this.soma = this.carrinhoService.totalCarrinhoCompras()
    console.log('paulo', this.soma.lenght)
  }
  ngOnDestroy() {
   this.autenticacao.token_id
  }
  
  logoff() {
    this.autenticacao.sair()
  }
}
