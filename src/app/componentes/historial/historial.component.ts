import { Component,Input } from '@angular/core';
import { Seccion } from './../../modelos/seccion';
import{Historial} from './../../modelos/historial';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent  {
@Input () public historial!: Historial;
@Input () public seccion!:Seccion;
fecha= Date.now();
}
