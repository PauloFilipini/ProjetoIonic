import { AlertController } from '@ionic/angular';
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
    public alertController: AlertController ) { }

  ngOnInit() {
  }
  public autenticar(): void {
    this.autenticacao.autenticar(
      this.formulario.value.email,
      this.formulario.value.senha)
    
  }

}
