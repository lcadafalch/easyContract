import { Component, OnInit } from '@angular/core';
import { ServicioService } from "src/app/servicios/servicio.service" // importar servicio
import { from } from 'rxjs';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent {

  bitcoinconvertido = "";



  constructor(public _apiPrecio: ServicioService) {}

     convertirBtc() {

      let precioUsuario: any = (<HTMLInputElement>document.querySelectorAll("#content > div > form > div:nth-child(4) > div > input")[0]).value
      console.log(precioUsuario)

      this._apiPrecio.setPrecioUsuario(precioUsuario)
      this._apiPrecio.recibirPrecioBitcoin().subscribe((_apiPrecio: any) => {

          this.bitcoinconvertido = _apiPrecio;

          console.log(this.bitcoinconvertido)
        })

    }
  }
