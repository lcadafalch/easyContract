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

  DummyApi = {
    usuario1: "wefwecw3023c223",
    usuario2: "cj23fc23fv23f",
    cantidad: 0.3421223
  }


  constructor(public _contratos: ServicioService, public _usuario: UsuarioService) { }
  ngOnInit() {
    this._contratos.recibirContratos()

    this._contratos.recibirContratos()
      .subscribe((data: any) => {
        this.contratos = data
   
      });
  }


  // Recibe los contratos y los pinta en el DOM
  todos() {
    this._contratos.recibirContratos()
      .subscribe((data: any) => {
        this.contratos = data
      });
  }

  rechazados() {
    this._contratos.recibirContratos()

      .subscribe((data: any) => {
        const result = data.filter(e => e.estado === "denegado");
        this.contratos = result

      });
  }
  aceptados() {
    this._contratos.recibirContratos()

      .subscribe((data: any) => {
        const result = data.filter(e => e.estado === "aceptado");
        this.contratos = result

      });
  }

  fueraTerminio() {
    this._contratos.recibirContratos()
      .subscribe((data: any) => {
        let fechaHoy: Date = new Date();
        const fecha = data.filter(f => new Date(f.fechaFinalizacion) < fechaHoy)
        this.contratos = fecha
      });
  }
  //LLamada a la api nof funciona es de prueba
  finalizados() {
    this._contratos.recibirContratos()

      .subscribe((data: any) => {
        const result = data.filter(e => e.estado === "finalizados");
        this.contratos = result

      });
  }
 


}
  // finalizados

  //   if(if this._usuario.billetera === this.DummyApi.usuario1 && this._contratos.precio === this.DummyApi.cantidad   ){
     
  // }



