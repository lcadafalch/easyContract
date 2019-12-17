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
  
  //Conexion Backend formulario

  // conexion con el backend que guarda el formulario del contacto
  formularioContrato(datosContrato) {
    if (datosContrato.name != "") {
      
      console.log(datosContrato)

      let cache = this._data.post(this.apiUrl + "crearContrato", datosContrato)
        .subscribe((data) => {
          this.cache = data

        }
        )
    }
  }

  // Get de recibir contratos
  recibirContratos(){
    return this._http.get(this.apiUrl+"contrato")
   }
  // // Get de la transacción
  // carteraUsuarioEnvia(){
  //   return this._http.get(`https://blockchain.info/rawaddr/${this._http}`)
  // }

  //Put de la peticion
  cambiarEstado(datosContrato,estado){
    datosContrato.estado = estado
    return this._http.put(this.apiUrl + "editarcontrato",datosContrato)

  }

}