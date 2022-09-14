export type TipoSeccion='Precencial' |'Remota'
export interface Alumno {
  idAl?:number;
  rut: string;
  nombre: string;
  apellido: string;
  edad: string;
  tipo: TipoSeccion
}
