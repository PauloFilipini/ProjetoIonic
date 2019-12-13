import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Restaurantes } from './../module/restaurante.model';

import { RestaurantesService } from '../restaurantes.service'

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
  providers: [ RestaurantesService ]
})
export class RestaurantePage implements OnInit {

  public restaurante: Restaurantes = undefined

  constructor(
    private route: ActivatedRoute,
    private restauranteService: RestaurantesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(parametros => {
      this.restauranteService.getRestaurantesById(parametros.get("id"))
      .then(( restaurante: Restaurantes[] ) => {
        if(parametros.get("id") == 'bread-bakery'){
          this.restaurante = restaurante[0]
        }
        if(parametros.get("id") == 'burger-house'){
          this.restaurante = restaurante[1]
        }
        if(parametros.get("id") == 'coffee-corner'){
          this.restaurante = restaurante[2]
        }
        if(parametros.get("id") == 'green-food'){
          this.restaurante = restaurante[3]
        }
        if(parametros.get("id") == 'ice-cream'){
          this.restaurante = restaurante[4]
        }
        if(parametros.get("id") == 'tasty-treats'){
          this.restaurante = restaurante[5]
        }
      })
    })
  }
}
