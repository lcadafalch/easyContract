import { Component, OnInit } from '@angular/core';
import { ServicioService } from "src/app/servicios/servicio.service" // importar servicio
import { from } from 'rxjs';



@Component({
  selector: 'app-mis-contratos',
  templateUrl: './mis-contratos.component.html',
  styleUrls: ['./mis-contratos.component.css']
})
export class MisContratosComponent {

  

  constructor( public servicioContrato: ServicioService) {



  }
}
