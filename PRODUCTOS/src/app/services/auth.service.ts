import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // login(user: string, password: string): boolean {
  //   if (user === 'jpbalan@correo.url.edu.gt' && password === 'hola123') {
  //     localStorage.setItem('username', user);
  //     return true;
  //   }
  //   return false;
  // }

  /**
   * @name logout()
   * @description
   *  Indica que el usuario cerro sesión.
   */
  logout(): any {
    localStorage.clear();
  }

  /**
   * @name getUser()
   * @description
   *  Toma al usuario que inicia sesión.
   * @returns Retorna al usuario.
   */
  getUser(): any {
    return localStorage.getItem('username');
  }

  /**
   * @name isLoggedIn()
   * @description
   *  Indica que el usuario aun sige loggeado.
   * @returns Retorna al usuario.
   */
  isLoggedIn(): boolean {
    return (this.getUser() !== undefined)? true:false;
  }

  /**
   * @name setUser(uid)
   * @description
   *  Envia al usuario que inicia sesión.
   * @param {String} uid ID del usuario que inicia sesión
   */
  setUser(uid: string){
    localStorage.setItem('username', uid);
  }
}
