import { Usuario } from './../module/usuario.model';
import { Component, OnInit } from '@angular/core';
import { Autenticacao } from './../autenticacao.service';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  providers: [Autenticacao]
})
export class CadastroPage implements OnInit {
  
  public formulario: FormGroup = new FormGroup({
    
    'nome_completo': new FormControl(null),
    'email': new FormControl(null),
    'senha': new FormControl(null),
    'confirma_senha': new FormControl(null),
  })
  constructor(private autenticacao: Autenticacao) {
    
   }

  ngOnInit() {
 
  }

  public cadastrarUsuario(): void {
  
    let usuario: Usuario = new Usuario(
      
      this.formulario.value.nome_completo,
      this.formulario.value.email,
      this.formulario.value.senha,
      this.formulario.value.confirma_senha,

    )
    this.autenticacao.cadastrarUsuario(usuario)
    console.log('paulo', usuario)
  }
  
}
