import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "src/app/servicios/usuario.service" // importar servicio
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formData = {
    nombre: "",
    apellido: "",
    usuario: "",
    email: "",
    billetera:"",
    password: "",
  }

  formLogin = {
    email: "",
    password: ""
  }

  // SubsLogin: Subscription;

  constructor(public _user: UsuarioService) {
    // this.SubsLogin = this._user.SubjLogin.subscribe((data: any) => {
    //   console.log(`This is data provided from back-end`)
    // })

  }

  // registra el usuario en la base de datos y lo guarda en mongoDB

  register() {

    if (this.formData.nombre != "" && this.formData.apellido != "" && this.formData.usuario && this.formData.email != "" && this.formData.password != "") {

      this._user.registerUser({ nombre: this.formData.nombre, apellido: this.formData.apellido, usuario: this.formData.usuario,billetera:this.formData.billetera, email: this.formData.email, password: this.formData.password })

    } else {
      console.log("has fallado en algun campo")
    }

  }
  login() {

    this._user.login({ email: this.formLogin.email, password: this.formLogin.password })
    console.log(this.formLogin.email, this.formLogin.password)

  }

}








  // onSignIn(googleUser) {
  //   var profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

  //   var id_token = googleUser.getAuthResponse().id_token;
  //   console.log(id_token);

  // }