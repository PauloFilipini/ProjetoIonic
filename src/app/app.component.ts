import { RestaurantesService } from './services/restaurantes.service';
import { Autenticacao } from './services/autenticacao.service';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [Autenticacao, RestaurantesService]
})
export class AppComponent {

  private subscription: Subscription
  logado: boolean  = false 

  constructor(
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private autenticacao: Autenticacao,
    
  ) {
    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByName("orange");
      this.splashScreen.hide();
    });
  }
  

  ngOnInit(): void {
    var firebaseConfig = {
      apiKey: "AIzaSyB4XySbLEbAKnKP6kcZGtehgrXsy7VwFRU",
      authDomain: "ionic-78df8.firebaseapp.com",
      databaseURL: "https://ionic-78df8.firebaseio.com",
      projectId: "ionic-78df8",
      storageBucket: "ionic-78df8.appspot.com",
      messagingSenderId: "146768325011",
      appId: "1:146768325011:web:a0bbebec511e59e6d4e066",
      measurementId: "G-CPV3KGBFDR"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    this.subscription = this.autenticacao.subject
    .subscribe((res) => {
      this.logado = this.autenticacao.autenticado();
    })
    if(this.autenticacao.autenticado()){
      this.router.navigate(['/home'])
    }
  }
  
}
