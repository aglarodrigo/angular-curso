import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <h3>{{titulo}}</h3>

<h3>La base es {{base}}</h3>
<button (click) = "sumar(base)">+{{base}}</button>
<span>{{numero}}</span>
<button (click) = "sumar(-base)">-{{base}}</button>
`
})
export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 0;
    /**
     * aumentar
     */
    base: number = 3;
  
    sumar(valor:number) {
      this.numero += valor;
    }
}