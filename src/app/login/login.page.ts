import { AlertController, Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Autenticacao } from './../autenticacao.service';
import { FormGroup, FormControl} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)
  })
 
  constructor(private autenticacao: Autenticacao,
    public alertController: AlertController,
    platform: Platform ) { 
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  this.formulario.value.email = ' '
  this.formulario.value.senha = ' '
  }

  public autenticar(): void {
    this.autenticacao.autenticar(
      this.formulario.value.email,
      this.formulario.value.senha)
      this.ngOnDestroy()
    
  }
}