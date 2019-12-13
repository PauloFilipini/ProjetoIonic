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

}

}