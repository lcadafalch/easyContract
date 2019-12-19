import {Routes} from "@angular/router"
import { HomeComponent } from './div/home/home.component';
import { UsuarioComponent } from './div/usuario/usuario.component';
import { RegisterComponent } from './div/register/register.component';
import { ContratoComponent } from './div/contrato/contrato.component';
import { NuevosContratosComponent } from './div/nuevos-contratos/nuevos-contratos.component';
import { MisContratosComponent } from './div/mis-contratos/mis-contratos.component';
import { PremiumComponent } from './div/premium/premium.component';
import { AuthGuard } from './guards/auth.guard';


export const ROUTES: Routes = [
 
    {path:'register', component:RegisterComponent},
    {path:'home', component:HomeComponent, canActivate: [AuthGuard]},
    {path:'usuario', component:UsuarioComponent,canActivate: [AuthGuard]},
    {path:'contrato', component:ContratoComponent,canActivate: [AuthGuard]},
    {path:'misContratos', component:MisContratosComponent,canActivate: [AuthGuard]},
    {path:'nuevosContratos', component:NuevosContratosComponent,canActivate: [AuthGuard]},
    {path:'premium', component:PremiumComponent,canActivate: [AuthGuard]},
    {path:'', pathMatch:'full', redirectTo:'register'},
    {path:'**', pathMatch:'full', redirectTo:'register'}

];