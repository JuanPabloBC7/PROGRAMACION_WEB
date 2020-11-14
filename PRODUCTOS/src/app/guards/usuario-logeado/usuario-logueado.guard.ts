import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogueadoGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  /**
   * @name canActivate
   * @description
   *  Metodo que se encarga indicar si un usuario se encuentra logeado o no
   * @param next 
   * @param state 
   * @returns El usuario esta logeado "isLoggedIn"
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isLoggedIn = this.authService.isLoggedIn();
      console.log('canActive', isLoggedIn);
    return isLoggedIn;
  }
  
}
