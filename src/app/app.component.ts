import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'login'
    },
    {
      title: 'Cadastrar',
      url: '/cadastro',
      icon: 'cadastrar'
    },
    {
      title: 'Tela Inicial',
      url: '/tela-inicial',
      icon: 'tela-inicial'
    },
    {
      title: 'Screen',
      url: '/splashscreen',
      icon: 'splash'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
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
  }
  
}
