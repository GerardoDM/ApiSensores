import { Component, OnInit } from '@angular/core';
import { TokenPayload, AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  credentials: TokenPayload = {
    id: 0,
    username: "",
    password: ""
}

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    this.auth.register(this.credentials).subscribe(
        () => {
            this.router.navigateByUrl('/')

        },
        err => {
            console.error(err)
        }
    )
}

}
