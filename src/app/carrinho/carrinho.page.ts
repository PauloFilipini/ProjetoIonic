import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'


import { ItemCarrinho } from './../module/item-carrinho.model';
import { Pedido } from './../module/pedido.model';

import { CarrinhoService } from  './../carrinho.service';
import { PedidoService } from './../pedido.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
  providers: [ PedidoService ]
})
export class CarrinhoPage implements OnInit {

  public idPedidoCompra: number
  public itensCarrinho: ItemCarrinho[] = []
  public total: number = 0

  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100) ]),
    'numero': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(10) ]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null,  [Validators.required,  ])
  })

  constructor(  
    private pedidoService: PedidoService,
    private carrinhoService: CarrinhoService,
    private router: Router) { }

  ngOnInit() {
    this.total = this.carrinhoService.totalCarrinhoCompras()
    this.itensCarrinho = this.carrinhoService.exibirItens()
  }
  public confirmarCompra(): void {
    
    let pedido: Pedido = new Pedido(
      this.formulario.value.endereco,
      this.formulario.value.numero,
      this.formulario.value.complemento,
      this.formulario.value.formaPagamento,
      this.carrinhoService.exibirItens()
      )
        this.pedidoService.efetivarCompra(pedido)
        .subscribe((idPedido: number) =>{
          this.idPedidoCompra = idPedido,
          this.carrinhoService.limparCarrinho()
          this.router.navigate(['/pedidoCompleto'])
      }) 
  
}

public adicionar(item: ItemCarrinho): void {
  this.carrinhoService.adicionarQuantidade(item)
  this.total = this.carrinhoService.totalCarrinhoCompras()
}

public diminuir(item:ItemCarrinho):void{
  this.carrinhoService.diminuirQuantidade(item)
  this.total = this.carrinhoService.totalCarrinhoCompras()
}

public remover(item:ItemCarrinho):void{
  this.carrinhoService.removerItem(item)
  this.total = this.carrinhoService.totalCarrinhoCompras()
}
}
