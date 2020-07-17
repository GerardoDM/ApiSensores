import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


export interface Lectura {
  
  _id: String
  temperatura: number
  humedad: number
  lecturas_dht: Array<objeto_lectura>
  promedio_lecturas : Array<objeto_promedio_lecturas>
  lecturas: Array<object>
  id : String
  
  
}

export interface objeto_lectura {

  _id : String,
	hora_registro: number
	fecha_registro: number
	lecturas: Array<object>
}

export interface objeto_promedio_lecturas {

  _id : string,
	lecturas_dht_id : string,
	hora_registro : number,
	fecha_registro : number,
	temperatura : number,
	humedad : number
}



@Injectable()
export class LecturasService {

  baseUrl = environment.baseUrl


  constructor(private http:HttpClient, private router:Router) { }


  public showLecturas( number: Number): Observable<Lectura[]>{

    

    let url = `${this.baseUrl}/sensores/lecturas/get/${number}`
    
    return this.http.get<Lectura[]>(url)
    
 }
}
