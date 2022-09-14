import { Component } from '@angular/core';
import{Alumno} from './modelos/alumno';
import {Historial} from './modelos/historial';
import{Seccion} from './modelos/seccion';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
public listaHistorial: Array<Historial>=[

];
public listaAlumno: Array<Alumno>=[

];
public listaSeccion: Array<Seccion>=[

];
public guardarAlumno (nuevo:Alumno): void{
  const id= this.listaAlumno.length+1;
  nuevo.idAl=id;
  this.listaAlumno.push(nuevo);
}
public guardarSeccion(nuev:Seccion): void{
  const id= this.listaSeccion.length+1;
  nuev.idSec=id;
  this.listaSeccion.push(nuev)
}
}
