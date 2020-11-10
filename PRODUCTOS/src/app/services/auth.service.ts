import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: string, password: string): boolean {
    if (user === 'jpbalan@correo.url.edu.gt' && password === 'hola123') {
      localStorage.setItem('username', user);
      return true;
    }
    return false;
  }

  logout(): any {
    localStorage.clear();
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return (this.getUser() !== undefined)? true:false;
  }

  setUser(uid: string){
    localStorage.setItem('username', uid);
  }
}
