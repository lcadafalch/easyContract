import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  precioUsuario: number;

  public contratos: contrato[] = [
    {
      "titulo": "viña del mar",
      "usuario Contacto": "vewrvbje0rbvoejrvervjeefov",
      "estado": "aceptado",
      "cantidad": "120€",
      "fecha finalización": "11/12/2020",

    },
    {
      "titulo": "viña del mar",
      "usuario Contacto": "vewrvbje0rbvoejrvervjeefov",
      "estado": "aceptado",
      "cantidad": "120€",
      "fecha finalización": "11/12/2020",

    }, {
      "titulo": "viña del mar",
      "usuario Contacto": "vewrvbje0rbvoejrvervjeefov",
      "estado": "rechazado",
      "cantidad": "120€",
      "fecha finalización": "11/12/2020",

    }, {
      "titulo": "viña del mar",
      "usuario Contacto": "vewrvbje0rbvoejrvervjeefov",
      "estado": "finallizado",
      "cantidad": "120€",
      "fecha finalización": "11/12/2020",

    }, {
      "titulo": "viña del mar",
      "usuario Contacto": "vewrvbje0rbvoejrvervjeefov",
      "estado": "finalizado",
      "cantidad": "120€",
      "fecha finalización": "11/12/2020",

    }, {
      "titulo": "viña del mar",
      "usuario Contacto": "vewrvbje0rbvoejrvervjeefov",
      "estado": "finalizado",
      "cantidad": "120€",
      "fecha finalización": "11/12/2020",

    }, {
      "titulo": "viña del mar",
      "usuario Contacto": "vewrvbje0rbvoejrvervjeefov",
      "estado": "fuera de terminio",
      "cantidad": "120€",
      "fecha finalización": "11/12/2020",

    },
  ]
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
export interface contrato {
  "titulo": String,
  "usuario Contacto": String,
  "estado": String,
  "cantidad": String,
  "fecha finalización": String,
}
