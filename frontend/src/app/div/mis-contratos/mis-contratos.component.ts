import { Component, OnInit } from '@angular/core';
import { ServicioService } from "src/app/servicios/servicio.service" // importar servicio Contratos
import { UsuarioService } from "src/app/servicios/usuario.service"
import { from } from 'rxjs';



@Component({
  selector: 'app-mis-contratos',
  templateUrl: './mis-contratos.component.html',
  styleUrls: ['./mis-contratos.component.css']
})
export class MisContratosComponent {



  constructor(public _dataContratos: ServicioService, public _dataUsuarios: UsuarioService) {
  }

  BuscarMisContratos() {
  }

}
