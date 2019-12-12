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
        this.restaurante = restaurante[0]
        console.log('restaurante', restaurante[0])
      })
    })
  }
}
