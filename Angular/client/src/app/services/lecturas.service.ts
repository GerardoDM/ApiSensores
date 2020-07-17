import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


export interface Lectura {
  _id: String
  temperatura: number
  humedad: number
  lecturas_dht: Object
  promedio_lecturas : object
  lecturas: Array<object>
  id : String
  
  
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
