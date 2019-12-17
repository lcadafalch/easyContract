import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-nuevos-contratos',
  templateUrl: './nuevos-contratos.component.html',
  styleUrls: ['./nuevos-contratos.component.css']
})
export class NuevosContratosComponent implements OnInit {

  contratos = {};
  aceptar: boolean[];
  denegar = true;


  constructor(public _contratos: ServicioService) { }
  ngOnInit() {

    // Recibe los contratos y los pinta en el DOM
    this._contratos.recibirContratos()
      .subscribe((data: any) => {
        this.contratos = data
        let result = data.filter(e => e.estado === "pendiente");
        if (result) {
          this.aceptar = new Array(result.length).fill(true)
        }
      });
  }

  // función que cambia el estado del contrato 

  cambiarEstado(contrato: object, estado: String) {
    this._contratos.cambiarEstado(contrato, estado)
      .subscribe((data: any) => {
        this.contratos = data
        console.log(data)
        // Recibe los contratos y los pinta en el DOM
        this._contratos.recibirContratos()
          .subscribe((data: any) => {
            this.contratos = data
            let result = data.filter(e => e.estado === "pendiente");

            console.log(result)
            if (result) {
              this.aceptar = new Array(data.length).fill(true)
            }

          });
      }
      )
  }
}
