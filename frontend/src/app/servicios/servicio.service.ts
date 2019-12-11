import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  //Conexion contrato backend
  observablepost: Subscription
  apiUrl = "http://localhost:3000/";
  cache: Object = ""


  //api para precio BTC/USD
  precioUsuario: number;

  constructor(public _http: HttpClient, public _data: HttpClient) {

    console.log("servicio funciona")
  }


  setPrecioUsuario(newPrecio: number): void {
    this.precioUsuario = newPrecio
  }

  recibirPrecioBitcoin() {
    return this._http.get(`https://blockchain.info/tobtc?currency=EUR&value=${this.precioUsuario}`)

  }

  //Conexion Backend
  RegistrarContrato(datosContrato) {
    console.log(datosContrato)

    let cache = this._data.post(this.apiUrl + "registrarContrato", datosContrato)
      .subscribe((data) => {
        this.cache = data
       
      })
  }
}
