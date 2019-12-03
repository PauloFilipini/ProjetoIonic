import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
    const numbers = timer(1500);
    numbers.subscribe(x => this.router.navigate(['/login']));
  }

 
}
