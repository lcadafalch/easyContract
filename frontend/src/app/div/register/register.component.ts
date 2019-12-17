import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "src/app/servicios/usuario.service" // importar servicio
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formData = {
    nombre: "",
    apellido: "",
    usuario: "",
    email: "",
    password: "",
  }

  formLogin = {
    email: "",
    password: ""
  }


  constructor(public _user: UsuarioService) { }

// registra el usuario en la base de datos y lo guarda en mongoDB
  register() {

    if (this.formData.nombre != "" && this.formData.apellido != "" && this.formData.usuario && this.formData.email != "" && this.formData.password != "") {

      this._user.registerUser({ nombre: this.formData.nombre, apellido: this.formData.apellido, usuario: this.formData.usuario, email: this.formData.email, password: this.formData.password })

    } else {
      console.log("has fallado en algun campo")
    }

  }


  //  onSignIn(googleUser) {
  //   var profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

  //   var id_token = googleUser.getAuthResponse().id_token;
  //   console.log(id_token);

  // }

  ngOnInit() {

  }

}
