import { Component, OnInit } from '@angular/core';
import { ServicioService } from "src/app/servicios/servicio.service" // importar servicio
import { from } from 'rxjs';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent {


  formData = {
    titulo: "",
    texto: "",
    usuarioDestinatario: "",
    cantidad: "",
    fechaFinalizacion: ""
  }


  //BTC / USD
  bitcoinconvertido = "";

  constructor(public servicioContrato: ServicioService) { }

  convertirBtc() {

    let precioUsuario: any = (<HTMLInputElement>document.querySelectorAll("#content > div > form > div:nth-child(4) > div > input")[0]).value
    console.log(precioUsuario)

    this.servicioContrato.setPrecioUsuario(precioUsuario)
    this.servicioContrato.recibirPrecioBitcoin().subscribe((servicioContrato: any) => {

      this.bitcoinconvertido = servicioContrato;

      console.log(this.bitcoinconvertido)
    })
  }

  // Contrato Post Backend
  postContrato() {

  let contrato = this.servicioContrato.RegistrarContrato({titulo:this.formData.titulo, texto:this.formData.texto,usuarioDestinatario:this.formData.usuarioDestinatario,fechaFinalizacion:this.formData.fechaFinalizacion})
  console.log(contrato)



  }
}
