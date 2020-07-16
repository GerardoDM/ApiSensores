import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



export interface Sensor {
  id: number
  nombre: string
  ubicacion: string
  editMode : Boolean
}

@Injectable()
export class SensoresService {

  baseUrl = environment.baseUrl


  constructor(private http:HttpClient, private router:Router) { }

  public create(sensor: Sensor): Observable<any>{

    let url = `${this.baseUrl}/sensores/create`
    // let url = `/personajes/create`;
    return this.http.post(url, sensor)
  }

  

    public getSensores(): Observable<Sensor[]>{
      let url = `${this.baseUrl}/sensores/index`;
     // let url = `${this.env.apiUrl}/personajes/index`

      

      return this.http.get<Sensor[]>(url)
      
    }

    public delete(id: number): Observable<{}>{


      let url = `${this.baseUrl}/sensores/delete/${id}`;

     // const url  = `personajes/delete/${id}`
      return this.http.delete(url)

    }

    public edit(sensor: Sensor): Observable<Sensor>{
      let url = `${this.baseUrl}/sensores/update/${sensor.id}`;

     //const url  = `personajes/update/${personaje.id}`
      return this.http.patch<Sensor>(url, sensor)
    }

    public show(sensor: Sensor): Observable<Sensor>{
      let url = `${this.baseUrl}/sensores/show/${sensor.id}`;

      //const url  = `personajes/show/${personaje.id}`
      return this.http.get<Sensor>(url)
    }
}
