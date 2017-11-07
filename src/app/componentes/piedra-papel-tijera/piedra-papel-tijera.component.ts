import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera'

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  respuesta:number;
  miJuego:JuegoPiedraPapelTijera;
  constructor() { }

  ngOnInit() {
    this.miJuego = new JuegoPiedraPapelTijera;
  }
  nuevoJuego(){
    this.miJuego.NuevoJuego();
    this.respuesta = 0;
  }
  verificar(res){
    this.miJuego.Verificar(res);
    this.respuesta = res;
  }
}
