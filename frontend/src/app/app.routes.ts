import {Routes} from "@angular/router"
import { HomeComponent } from './div/home/home.component';
import { UsuarioComponent } from './div/usuario/usuario.component';
import { RegisterComponent } from './div/register/register.component';
import { LoginComponent } from './div/login/login.component';
import { ContratoComponent } from './div/contrato/contrato.component';


export const ROUTES: Routes = [
 
    {path:'register', component:RegisterComponent},
    {path:'login', component:LoginComponent},
    {path:'home', component:HomeComponent},
    {path:'usuario', component:UsuarioComponent},
    {path:'contrato', component:ContratoComponent},
    {path:'', pathMatch:'full', redirectTo:'login'},
    {path:'**', pathMatch:'full', redirectTo:'login'}

];