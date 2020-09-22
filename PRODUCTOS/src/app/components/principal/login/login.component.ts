import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mensajeError: string;

  constructor(private router: Router, public authService: AuthService) { 
    this.mensajeError = '';
  }

  ngOnInit(): void {
  }

  login(username: string, password: string): boolean {
    this.mensajeError = '';
    if (!this.authService.login(username, password)){
      this.mensajeError = 'Login incorrecto.';
      setTimeout(
        function() {
          return this.mensajeError = '';
        }.bind(this), 2500
      );
    }
    this.router.navigate(['/AP'])
    return
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }

  NavegarHaciaAdministrarProductos(){
    this.router.navigate(['/AP'])
  }
}
