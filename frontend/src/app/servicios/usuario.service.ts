import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subscription, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // conexion usuario backend
  // SubjLogin:Subject;                         
  observablepost: Subscription
  apiUrl = "http://localhost:3000/";
  cache: Object = ""
  SubjLogin: Subject<object>;

  constructor(public _data: HttpClient) {

    // this.SubjLogin = new Subject<object>();        Created by k-b00t
    console.log(_data)
  }
  //Conexion Backend
  registerUser(datosUsuario) {
    console.log(datosUsuario)

    if (datosUsuario.name != "") {
      console.log("nombre correcto")

      let cache = this._data.post(this.apiUrl + "registrarUsuario", datosUsuario)
        .subscribe((data) => {
          // this.SubjLogin.next(data)           Created by k-b00t
          this.cache = data
        })

    } else {
      console.log("noooo")

    }
  }

  // LoginUsuario
  login(datosUsuario) {
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
  // ngOnDestroy() {
  //   this.observablepost.unsubscribe();
  // }

}






