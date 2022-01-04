import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent{

  @Input() nuevo: Personaje = {
    nombre : '',
    poder : 0
  }
  
 // @Output() onNewHeroe : EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService:DbzService){  }

  agregar():void{
    
    this.dbzService.actualizarLista(this.nuevo)
  }

}
