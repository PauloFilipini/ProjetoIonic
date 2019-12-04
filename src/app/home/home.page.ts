import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Autenticacao } from './../autenticacao.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [Autenticacao]
})
export class HomePage {

  constructor(private autenticacao:Autenticacao,
    private router: Router) {}

  ngOnInit() {
  }
  ngOnDestroy() {
   this.autenticacao.token_id
  }

  logoff() {
    this.autenticacao.sair()
  }
}
