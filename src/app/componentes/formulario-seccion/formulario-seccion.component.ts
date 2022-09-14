import { Component,Output, EventEmitter } from '@angular/core';
import { Seccion } from './../../modelos/seccion';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent  {
@Output() public insertar= new EventEmitter<Seccion>();
public seccion: Seccion={
  nombreSeccion:'',
}
public cambiarSeccion(evento: Event): void{
  const nuevaSeccion= evento.target as HTMLInputElement;
  this.seccion.nombreSeccion= nuevaSeccion.value;
}
public guardar(): void{
  const copia:Seccion={...this.seccion};
  this.insertar.emit(copia);
  this.seccion.nombreSeccion=' ';

}


}
