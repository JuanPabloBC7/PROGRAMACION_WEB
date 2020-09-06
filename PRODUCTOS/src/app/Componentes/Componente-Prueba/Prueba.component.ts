import { Component } from '@angular/core';

@Component({
    selector: 'Prueba',
    templateUrl: './Prueba.component.html'
})
export class ComponentJPBC{

    public titulo: string;
    public comentario: string;
    public year: number;

    constructor(){
        this.titulo = "Hola mundo, soy MI COMPONENTE";
        this.comentario = "Este es mi primer componente";
        this.year = 2020;

        console.log("Componente cargado.!!");
        console.log(this.titulo, this.comentario, this.year)
    }
}