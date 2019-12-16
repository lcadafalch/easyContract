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
  // nl2br (str, is_xhtml) {
  //       var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
  //       return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
  //     }
  //Conexion Backend formulario
  formularioContrato(datosContrato) {
    if (datosContrato.name != "") {

      // console.log(datosContrato.texto)
      // datosContrato.texto =this.nl2br(datosContrato.texto,true)
      // console.log(datosContrato.texto)
      
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
  // Get de la transacción
  carteraUsuarioEnvia(){
    return this._http.get(`https://blockchain.info/rawaddr/${this._http}`)
  }

  //Put de la peticion
  cambiarEstadoAprovado(datosContrato){
    console.log(datosContrato.estado)
    return this._http.put(this.apiUrl + "crearContrato", datosContrato)

  }

}