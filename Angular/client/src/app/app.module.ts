import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SensoresComponent } from './components/sensores/sensores.component';
import { AuthService } from './services/auth.service';
import { GuardService } from './services/guard.service';
import { SensoresService } from './services/sensores.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './interceptors/interceptor.service';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes = [
  {path: 'sensores', component: SensoresComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SensoresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, GuardService, SensoresService, JwtHelperService, {
    provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
  }, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
  JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
