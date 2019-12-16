import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-nuevos-contratos',
  templateUrl: './nuevos-contratos.component.html',
  styleUrls: ['./nuevos-contratos.component.css']
})
export class NuevosContratosComponent implements OnInit {

  contratos = {};
  aceptar = true;


  constructor(public _contratos: ServicioService) {}
  ngOnInit() {

    this._contratos.recibirContratos()
      .subscribe((data: any) => {
        this.contratos = data
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
