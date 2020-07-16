import { Component, OnInit } from '@angular/core';
import { AuthService, TokenPayload } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  
    credentials: TokenPayload = {
        id: 0,
        username: "",
        password: ""
    }

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.login(this.credentials).subscribe(
        () => {
            this.router.navigateByUrl('/')

        },
        err => {
            console.error(err)
        }
    )
}

}


