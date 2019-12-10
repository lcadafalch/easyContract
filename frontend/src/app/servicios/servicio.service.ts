import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  precioUsuario: number;

   constructor(public _http: HttpClient) {
    console.log("servicio funciona")
  }


  setPrecioUsuario(newPrecio: number): void {
    this.precioUsuario = newPrecio

  }

  recibirPrecioBitcoin() {
    return this._http.get(`https://blockchain.info/tobtc?currency=EUR&value=${this.precioUsuario}`)

  }
}
