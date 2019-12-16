import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // conexion usuario backend
  observablepost: Subscription
  apiUrl = "http://localhost:3000/";
  cache: Object = ""

  constructor(public _data: HttpClient) {

    console.log(_data)
  }
  //Conexion Backend
  registerUser(datosUsuario) {
    console.log(datosUsuario)

    if (datosUsuario.name != "") {
      console.log("nombre correcto")

      let cache = this._data.post(this.apiUrl + "registrarUsuario", datosUsuario)
        .subscribe((data) => {
          this.cache = data
        })

    } else {
      console.log("noooo")

    }
  }

// LoginUsuario
  loginUser(datosUsuario) {
    if (datosUsuario.name != "") {
      console.log(datosUsuario)

      let cache = this._data.post(this.apiUrl + "logearUsuario", datosUsuario)
        .subscribe((data) => {
          this.cache = data

        }
        )
    }
  }

  //Post del contrato
  postContrato(datosContrato) {
    if (datosContrato.name != "") {
      console.log(datosContrato)

      let cache = this._data.post(this.apiUrl + "postearContrato", datosContrato)
        .subscribe((data) => {
          this.cache = data

        }
        )
    }

  }
  ngOnDestroy() {
    this.observablepost.unsubscribe();
  }

}






