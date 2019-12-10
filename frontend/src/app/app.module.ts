import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './div/home/home.component';
import { RegisterComponent } from './div/register/register.component';
import { UsuarioComponent } from './div/usuario/usuario.component';
import { ContratoComponent } from './div/contrato/contrato.component';
import { LoginComponent } from './div/login/login.component';
import{RouterModule} from '@angular/router';

// import módulo HTTP 
import{HttpClientModule } from '@angular/common/http'

// Routes
import{ROUTES} from './app.routes' 

import { from } from 'rxjs';
import { NuevosContratosComponent } from './div/nuevos-contratos/nuevos-contratos.component';
import { MisContratosComponent } from './div/mis-contratos/mis-contratos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    UsuarioComponent,
    ContratoComponent,
    LoginComponent,
    NuevosContratosComponent,
    MisContratosComponent
  ],
  imports: [
    HttpClientModule,  // modulo HTTP
    BrowserModule,
    RouterModule.forRoot(ROUTES ,{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
