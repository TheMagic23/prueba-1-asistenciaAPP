import { Component,Output, EventEmitter } from '@angular/core';
import {Alumno,TipoSeccion} from './../../modelos/alumno'
@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent  {
@Output() public insertar= new EventEmitter<Alumno>();

 public alumno :Alumno ={
  rut:'',
  nombre:'',
  apellido:'',
  edad:'',
  tipo:'Remota'
 }

 public cambiarRut(evento: Event): void{
  const nuevoRut= evento.target as HTMLInputElement;
  this.alumno.rut= nuevoRut.value;

 }
 public cambiarNombre (evento: Event): void{
  const responsable= evento.target as HTMLInputElement;
  this.alumno.nombre= responsable.value;
 }
 public cambiarApellido( evento: Event): void{
  const nuevoApellido= evento.target as HTMLInputElement;
  this.alumno.apellido= nuevoApellido.value;
 }
 public cambioEdad (evento: Event): void{
  const elemento= evento.target as HTMLInputElement;
  this.alumno.edad= elemento.value;
 }
 public cambiarTipo (evento: Event): void{
  const camTipo= evento.target as HTMLInputElement;
  this.alumno.tipo= camTipo.value as TipoSeccion;
 }
 public guardar(): void{
  const copia: Alumno={...this.alumno};
  this.insertar.emit(copia);
  this.alumno.rut='';
  this.alumno.nombre='';
  this.alumno.apellido='';
  this.alumno.edad='';
  this.alumno.tipo='Remota';

 }



}
