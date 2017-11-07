import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama'

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  respuesta:string;
  ocultar:boolean;
  miJuego:JuegoAnagrama;
  constructor() { }

  ngOnInit() {
    this.miJuego = new JuegoAnagrama;
    this.ocultar = true;
  }
  verificar(){
    this.miJuego.Verificar(this.respuesta);
    this.ocultar = false;
  }
  nuevoJuego(){
    this.miJuego.NuevoJuego();
    this.ocultar = true;
    this.respuesta = "";
  }
}
