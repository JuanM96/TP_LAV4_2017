import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-historial-de-jugadas',
  templateUrl: './historial-de-jugadas.component.html',
  styleUrls: ['./historial-de-jugadas.component.css']
})
export class HistorialDeJugadasComponent implements OnInit {
  listado:any;
  constructor(public historial:JuegoServiceService) { }

  ngOnInit() {
  }
  TraerJugadas(){
    this.listado = this.historial.TraerLista();
  }

}
