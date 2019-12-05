import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './div/home/home.component';
import { RegisterComponent } from './div/register/register.component';
import { UsuarioComponent } from './div/usuario/usuario.component';
import { ContratoComponent } from './div/contrato/contrato.component';
import { LoginComponent } from './div/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    UsuarioComponent,
    ContratoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
