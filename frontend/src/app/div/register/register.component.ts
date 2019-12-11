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
    nombre:"",
    apellido:"",
    usuario:"",
    email:"",
    password:"",
  }

  formLogin = {
    email:"",
    password:""
  }
  

  constructor(public _user: UsuarioService) { }

  // registerEmail: string

   register(){

     if(this.formData.nombre !="" && this.formData.apellido !="" &&this.formData.usuario && this.formData.email !="" && this.formData.password !="" ){
    
     this._user.registerUser({ nombre: this.formData.nombre, apellido:this.formData.apellido,usuario:this.formData.usuario,email:this.formData.email,password:this.formData.password})
  
     }else{
       console.log("has fallado en algun campo")
     }
     
   }

   login(){
     
     this._user.loginUser({email:this.formLogin.email, password:this.formLogin.password})

   }

  ngOnInit() {

  }

}
