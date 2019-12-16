import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router'

import { Restaurantes } from './../module/restaurante.model';
import { Produto } from '../module/produto.model';
import { ItemCarrinho } from '../module/item-carrinho.model'

import { RestaurantesService } from '../restaurantes.service'
import { ProdutoService } from '../produto.service'
import { CarrinhoService } from '../carrinho.service'

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
  providers: [ RestaurantesService, ProdutoService ]
})
export class RestaurantePage implements OnInit {

  public produtos: Produto[] = []
  public itensCarrinho: ItemCarrinho[] = []
  public total: number = 0

  public restaurante: Restaurantes = undefined

  constructor(
    private route: ActivatedRoute,
    private restauranteService: RestaurantesService,
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService
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
      this.produtoService.getProdutoByRestaurantId(parametros.get("id"))
      .then(( produtos: Produto[] ) =>{
        this.produtos = produtos
      })
    })
    this.itensCarrinho = this.carrinhoService.exibirItens()
    this.total = this.carrinhoService.totalCarrinhoCompras()
  }
  public adicionarItemCarrinho(produto: Produto): void {
    this.carrinhoService.incluirItem(produto)
    this.itensCarrinho = this.carrinhoService.exibirItens()
    this.total = this.carrinhoService.totalCarrinhoCompras()
    console.log('carrinho2', this.itensCarrinho)
  }

  public limparCarrinho(produto: Produto): void {
    this.carrinhoService.limparCarrinho()
    this.itensCarrinho = this.carrinhoService.exibirItens()
    this.total = this.carrinhoService.totalCarrinhoCompras()
  }

}
