import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {ObjetoLectura} from "../interfaces/objeto-lectura";

@Injectable()
export class LecturasService {

  baseUrl = environment.baseUrl

  constructor(private http:HttpClient, private router:Router) { }

  public showLecturas( number: Number): Observable<ObjetoLectura>{

    let url = `${this.baseUrl}/sensores/lecturas/get/${number}`

    return this.http.get<any>(url)

 }
}
