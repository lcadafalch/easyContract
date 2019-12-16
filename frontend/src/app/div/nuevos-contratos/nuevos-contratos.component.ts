import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-nuevos-contratos',
  templateUrl: './nuevos-contratos.component.html',
  styleUrls: ['./nuevos-contratos.component.css']
})
export class NuevosContratosComponent implements OnInit {

  contratos = {};
  aceptar: boolean[];
  denegar = true;


  constructor(public _contratos: ServicioService) { }
  ngOnInit() {

    this._contratos.recibirContratos()
      .subscribe((data: any) => {
        this.contratos = data
        console.log(data)
        if (data) {
          this.aceptar = new Array(data.length).fill(true)
        }

      });
  }

  cambiarAceptado(index: number) {
    if (this.aceptar[index] != true) {

       this._contratos.recibirContratos()
       .subscribe((data:any)=>{
        
      })
    }
  }
  cambiarDenegado() {
    if (this.denegar != true) {
      this._contratos.recibirContratos()
        .subscribe((data: any) => {

        })
    }
  }
};
