import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

import { Produto } from '../module/produto.model';
import { ItemCarrinho } from '../module/item-carrinho.model'

import { ProdutoService } from '../produto.service'
import { CarrinhoService } from '../carrinho.service'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  providers: [ ProdutoService, CarrinhoService ]
})
export class MenuPage implements OnInit {


  public produtos: Produto[] = []
  public itensCarrinho: ItemCarrinho[] = []
  public total: number = 0

  constructor( 
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens()
    this.total = this.carrinhoService.totalCarrinhoCompras()
    //console.log(this.itensCarrinho)
    this.route.parent.params.subscribe((parametros: Params) => {
      this.produtoService.getProdutoByRestaurantId(parametros.id)
        .then(( produtos: Produto[] ) => {
          this.produtos = produtos
  })
})
  }
  public adicionarItemCarrinho(produto: Produto): void {
    this.carrinhoService.incluirItem(produto)
    this.itensCarrinho = this.carrinhoService.exibirItens()
    this.total = this.carrinhoService.totalCarrinhoCompras()
  }

  public limparCarrinho(produto: Produto): void {
    this.carrinhoService.limparCarrinho()
    this.itensCarrinho = this.carrinhoService.exibirItens()
    this.total = this.carrinhoService.totalCarrinhoCompras()
  }

}
