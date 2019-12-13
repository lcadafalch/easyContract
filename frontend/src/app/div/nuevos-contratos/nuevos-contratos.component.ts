import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-nuevos-contratos',
  templateUrl: './nuevos-contratos.component.html',
  styleUrls: ['./nuevos-contratos.component.css']
})
export class NuevosContratosComponent implements OnInit {

  constructor(public _contratos:ServicioService) {

    this._contratos.recibirContratos()
    .subscribe((data:any)=>{
      console.log(data)
      console.log("hola")


    })
   }





  ngOnInit() {
  }

}
