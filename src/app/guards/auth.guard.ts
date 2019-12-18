import { Autenticacao } from '../services/autenticacao.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
 providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private autenticacao:Autenticacao){}

 canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

   let userAuthenticated ; // Get the current authentication state from a Service!

   if (localStorage.getItem('idToken') != null) {
     return false;
   } else {
     return true;
   }
 }
}