import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {
  casilla0:number = 0;
  casilla1:number = 0;
  casilla2:number = 0;
  casilla3:number = 0;
  casilla4:number = 0;
  casilla5:number = 0;
  casilla6:number = 0;
  casilla7:number = 0;
  casilla8:number = 0;
  constructor() { }

  ngOnInit() {
  }
  nuevoJuego(){

  }
  verificar(){

  }
}
