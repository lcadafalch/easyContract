import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public _data: HttpClient) { }

  registerUser(datosUsuario) {
    if(datosUsuario!= ""){
    return this._data.post("localhost:3000/register",{datosUsuario})
    }else{
      console.log("noooo")
    }
  }


}



