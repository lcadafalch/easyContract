import {Routes} from "@angular/router"
import { HomeComponent } from './div/home/home.component';
import { UsuarioComponent } from './div/usuario/usuario.component';
import { RegisterComponent } from './div/register/register.component';
import { LoginComponent } from './div/login/login.component';
import { ContratoComponent } from './div/contrato/contrato.component';
import { NuevosContratosComponent } from './div/nuevos-contratos/nuevos-contratos.component';
import { MisContratosComponent } from './div/mis-contratos/mis-contratos.component';
import { PremiumComponent } from './div/premium/premium.component';

export const ROUTES: Routes = [
 
    {path:'register', component:RegisterComponent},
    {path:'login', component:LoginComponent},
    {path:'home', component:HomeComponent},
    {path:'usuario', component:UsuarioComponent},
    {path:'contrato', component:ContratoComponent},
    {path:'misContratos', component:MisContratosComponent},
    {path:'nuevosContratos', component:NuevosContratosComponent},
    {path:'premium', component:PremiumComponent},
    {path:'', pathMatch:'full', redirectTo:'register'},
    {path:'**', pathMatch:'full', redirectTo:'register'}

];