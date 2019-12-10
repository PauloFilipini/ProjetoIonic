import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Autenticacao } from './../autenticacao.service';
import { Restaurantes } from './../module/restaurante.model'
import { RestaurantesService } from './../restaurantes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [RestaurantesService]
  
})
export class HomePage {


  public restaurantes: Restaurantes[]

  constructor(private autenticacao:Autenticacao,
    private router: Router,
    private RestaurantesService: RestaurantesService) {}

  ngOnInit() {
    this.RestaurantesService.getRestaurantes()
    .then((restaurantes: Restaurantes[] )  => {
       this.restaurantes = restaurantes
       //console.log('restaurantes', restaurantes)
    })
  }
  ngOnDestroy() {
   this.autenticacao.token_id
  }

  logoff() {
    this.autenticacao.sair()
  }
}
