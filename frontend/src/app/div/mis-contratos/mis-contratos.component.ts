import { Component, OnInit } from '@angular/core';
import { ServicioService } from "src/app/servicios/servicio.service" // importar servicio Contratos
import { UsuarioService } from "src/app/servicios/usuario.service"
import { from } from 'rxjs';



@Component({
  selector: 'app-mis-contratos',
  templateUrl: './mis-contratos.component.html',
  styleUrls: ['./mis-contratos.component.css']
})
export class MisContratosComponent {

  contratos = {};
  aceptar ={};


  constructor(public _contratos: ServicioService) {}
  ngOnInit() {

    this._contratos.recibirContratos()
      .subscribe((data: any) => {
        this.contratos = data
        this.aceptar = new Array(data.length).fill(true)
        
      });
  };

  
  cambiarAceptado(){
    if(this.aceptar != true){
      this._contratos.recibirContratos( )
      .subscribe((data:any)=>{
        
      })
    }
  }
};

