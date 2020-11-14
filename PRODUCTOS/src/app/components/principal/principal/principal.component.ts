import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * @name NavegarHaciaLogin()
   * @description
   *  Metodo que se encarga de navegar a la pagina de login al presionar un boton
   * @returns /login
   */
  NavegarHaciaLogin(){
    this.router.navigate(['/Login'])
  }

}
