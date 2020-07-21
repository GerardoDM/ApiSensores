import {PromedioLectura} from "./promedio-lectura";
import {LecturasDHT} from "./lecturas-dht";

export interface ObjetoLectura {

  sensor_id:number|string,
  fecha_registro:string,
  hora_registro:string,
  lecturas_dht:Array<LecturasDHT>,
  promedio_lecturas:Array<PromedioLectura>,
}
