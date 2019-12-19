import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contratos = {};
  aceptar = {};


  constructor(public _contratos: ServicioService) { }
  ngOnInit() { 
    this._contratos.recibirContratos()

    .subscribe((data: any) => {
      this._contratos.recibirContratos()
      .subscribe((data: any) => {
        this.contratos = data
        // console.log(data)
      });

    });
  }

}
