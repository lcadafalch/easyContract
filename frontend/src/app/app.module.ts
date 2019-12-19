import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './div/home/home.component';
import { RegisterComponent } from './div/register/register.component';
import { UsuarioComponent } from './div/usuario/usuario.component';
import { ContratoComponent } from './div/contrato/contrato.component';
import{RouterModule} from '@angular/router';

// import módulo HTTP 
import{HttpClientModule } from '@angular/common/http'

//import Guardia
import { AuthGuard } from './guards/auth.guard';

// modulo formulario
import { FormsModule } from '@angular/forms';



// Routes
import{ROUTES} from './app.routes' 

import { from } from 'rxjs';
import { NuevosContratosComponent } from './div/nuevos-contratos/nuevos-contratos.component';
import { MisContratosComponent } from './div/mis-contratos/mis-contratos.component';
import { ServicioService } from './servicios/servicio.service';
import { UsuarioService } from './servicios/usuario.service';
import { PremiumComponent } from './div/premium/premium.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    UsuarioComponent,
    ContratoComponent,
    NuevosContratosComponent,
    MisContratosComponent,
    PremiumComponent
  ],
  imports: [
    HttpClientModule,  // modulo HTTP
    FormsModule,      // modulo FORMS
    BrowserModule,
    RouterModule.forRoot(ROUTES ,{useHash:true})
  ],
  providers: [ServicioService,UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
