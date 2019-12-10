import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "src/app/servicios/usuario.service" // importar servicio
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public llamadasUsuario: UsuarioService) { }

  ngOnInit() {
    
  }

}
