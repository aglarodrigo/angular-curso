import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Zorrezno'];
  borrado:string = " ";
  heroe:boolean = false;
  borrarHeroe():void{
    this.borrado = this.heroes.pop() || '';
    this.heroe = this.borrado != " ";
  }
}
