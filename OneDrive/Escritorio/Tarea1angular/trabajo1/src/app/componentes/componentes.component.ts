import { Component} from '@angular/core';
import {Persona} from '../persona';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.css']
})
export class ComponentesComponent {

Persona1 = new Persona('Daniel','Escajeda',19,'Masculino');

title = 'Angular'
  

  

}
