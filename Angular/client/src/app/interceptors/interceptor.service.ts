import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHeaders, HttpHandler, HttpEvent} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(public auth:AuthService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.auth.getToken()}`
    })

    const reqClone = req.clone({
      headers
    })

    return next.handle(reqClone)
  }
}
