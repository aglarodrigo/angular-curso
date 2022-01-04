import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService {
    constructor(){
        console.log('servicio inicializado')
    }

    private _nuevo: Personaje = {
        nombre : 'Goten',
        poder : 3000
      }
    
      get nuevo():Personaje {
        return this._nuevo
      }

      get heroes():Personaje[]{
          return [...this._heroes]
      }

      private _heroes:Personaje[] = [
        {
          nombre:"Picolo",
          poder:5000
        },
        {
          nombre:"Gohan",
          poder:4000
        }
      ]
      
      actualizarLista(dato:Personaje){
        this._heroes.push({
          nombre:dato.nombre,
          poder:dato.poder
        })
        /*console.log(this.nuevo)
        this.nuevo.poder = 0
        this.nuevo.nombre =""*/
      }
}