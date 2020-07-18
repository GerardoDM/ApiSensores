import { Component } from '@angular/core';
import { User, AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'client';

  detalles: User 
  
 

  constructor(public auth: AuthService){}

  ngOnInit(): void {
    // const current = this.auth.getDetalles()
    // this.auth.getUser(current.id).subscribe(
    //   user => {
    //     this.detalles = user

    //   },
    //   err => {
        
    //   }
    // )


  }
}
