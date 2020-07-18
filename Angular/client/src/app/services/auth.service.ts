import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'
import {map} from 'rxjs/operators'

import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


export interface User{
  id: number
  username: string
  password: string
}

interface Token {
  token: string
}

export interface TokenPayload{
  id: number
  username: string
  password: string
}




@Injectable()
export class AuthService {

  private token: string
  baseUrl = environment.baseUrl


  constructor(private http:HttpClient, private router:Router, private jwtHelper: JwtHelperService) { }

    private guardarToken(token: string): void {
      localStorage.setItem('token', token)
      this.token = token
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
      }

    public getToken(): string {
        if (!this.token){
            this.token = localStorage.getItem('token')

        }

        return this.token
    }

    public getDetalles(): User {
        const token = this.getToken()

        let payload
        if(token){
            payload = token.split('.')[1]
            payload = window.atob(payload)
        
            return JSON.parse(payload)
        }

        else{
            return null
            
        }

    }

    public register(user: TokenPayload): Observable<any>{
        let url = `${this.baseUrl}/users/register`;

        return this.http.post(url, user)
    }

    public login(user: TokenPayload): Observable<any>{
        let url = `${this.baseUrl}/users/login`;

        const base = this.http.post(url, user)

      //  const base = this.http.post('users/login', user)

        const request = base.pipe(
            map((data: Token) => {
                if(data.token){
                    this.guardarToken(data.token)
                }

                return data
            })
        )

        return request
    }

    public logout(): void{

        this.token = ""
        window.localStorage.removeItem('token')
        this.router.navigateByUrl('login')
        
    }

  //   public getUser(id): Observable<any>{

  //     return this.http.get(`users/show/${id}`)
  // }

    
}
