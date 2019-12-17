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

  contratos = {};
  aceptar = {};


  constructor(public _contratos: ServicioService) { }
  ngOnInit() { 
    this._contratos.recibirContratos()

    this._contratos.recibirContratos()
      .subscribe((data: any) => {
        this.contratos = data
        console.log(data)
      });
  }


  // Recibe los contratos y los pinta en el DOM
  todos() {
    this._contratos.recibirContratos()
      .subscribe((data: any) => {
        this.contratos = data
        console.log(data)
      });
  }

  rechazados() {
    this._contratos.recibirContratos()

      .subscribe((data: any) => {
        const result = data.filter(e => e.estado === "denegado");
        console.log(result)
        this.contratos = result

      });
  }
  aceptados() {
    this._contratos.recibirContratos()

      .subscribe((data: any) => {
        const result = data.filter(e => e.estado === "aceptado");
        console.log(result)
        this.contratos = result

      });
  }
  
  fueraTerminio() {
    this._contratos.recibirContratos()
      .subscribe((data: any) => {
        let fechaHoy:Date = new Date();
        const fecha = data.filter( f => new Date(f.fechaFinalizacion) < fechaHoy) 
        console.log(fecha)
        this.contratos = fecha
      });
  }
}

