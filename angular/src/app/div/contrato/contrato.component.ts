import { Component, OnInit } from '@angular/core';
import { ServicioService } from "src/app/servicios/servicio.service" // importar servicio
import { FormsModule, NgForm } from "@angular/forms";
import { from } from 'rxjs';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent {


  formContrato = {
    titulo: "",
    texto: "",
    usuarioDestinatario: "",
    cantidad: "",
    fechaInicio: Date,
    fechaFinalizacion: Date
  }


  //BTC / USD
  bitcoinconvertido = "";

  constructor(public _servicioContrato: ServicioService) { }

  convertirBtc() {

    let precioUsuario: any = (<HTMLInputElement>document.querySelectorAll("#content > div > form > div:nth-child(4) > div > input")[0]).value

    this._servicioContrato.setPrecioUsuario(precioUsuario)
    this._servicioContrato.recibirPrecioBitcoin().subscribe((servicioContrato: any) => {

      this.bitcoinconvertido = servicioContrato;

      // console.log(this.bitcoinconvertido)
    })
  }

  // Contrato Post Backend envia los datos al backend y postea en mongo
  postContrato(form:NgForm):void {
    if (this.formContrato.titulo != "" )
      this._servicioContrato.formularioContrato({ titulo: this.formContrato.titulo, texto: this.formContrato.texto, usuarioDestinatario: this.formContrato.usuarioDestinatario, cantidad: this.formContrato.cantidad, fechaInicio: this.formContrato.fechaInicio, fechaFinalizacion: this.formContrato.fechaFinalizacion })

  }
}
