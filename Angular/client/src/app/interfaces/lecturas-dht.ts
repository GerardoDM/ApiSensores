import {Lectura} from "./lectura";

export interface LecturasDHT {

  _id:string,
  hora_registro:string,
  fecha_registro:string,
  lecturas:Array<Lectura>

}
