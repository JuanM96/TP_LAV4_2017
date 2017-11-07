import { Component, OnInit } from '@angular/core';
import { JuegoTicTacToe } from '../../clases/juego-tic-tac-toe'

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {
  casillas:number[] = [
    0,0,0,
    0,0,0,
    0,0,0
  ]
  miJuego:JuegoTicTacToe;
  resultado:string;
  ocultar:boolean = true;
  constructor() { }

  ngOnInit() {
    this.miJuego = new JuegoTicTacToe;
  }
  nuevoJuego(){
    this.casillasA0();
    this.miJuego.NuevoJuego();
    this.ocultar = true;
  }
  verificar(lugar){
    this.cambiarCasilla(lugar);
    this.miJuego.TurnoJugado(lugar);
    this.resultado = this.miJuego.Verificar();
    if (this.resultado != "Nadie") {
      this.ocultar = false;
    }
  }
  casillasA0(){
    for (var i = 0; i < this.casillas.length; i++) {
      this.casillas[i]=0;
    }
  }
  cambiarCasilla(lugar){
    this.casillas[lugar] = this.miJuego.turno;
  }
}
