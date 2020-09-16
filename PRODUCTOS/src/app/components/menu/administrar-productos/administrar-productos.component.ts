import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrar-productos',
  templateUrl: './administrar-productos.component.html',
  styleUrls: ['./administrar-productos.component.css']
})
export class AdministrarProductosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  NavegarHaciaSalir(){
    this.router.navigate(['/Principal'])
  }
}
