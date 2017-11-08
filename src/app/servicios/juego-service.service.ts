import { Injectable } from '@angular/core';
import { Juego } from '../clases/juego';
import { JuegoAdivina } from '../clases/juego-adivina';
import {MiHttpService} from './mi-http.service';
@Injectable()
export class JuegoServiceService {

  constructor(public miHttp:MiHttpService) { }

  public TraerLista(){
    this.miHttp.httpGetPromise("http://localhost"/*:8080*/+"/apirestSalaDeJuegos/apirestjugadores/ranking/traerTodos")
    .then(datos => {
      console.log(JSON.stringify(datos));
      return datos;
    })
    .catch(error => {console.log(error)});
  }
  public GuardarJuego(juego:any){
    this.miHttp.httpPostPromise("http://localhost"/*:8080*/+"/apirestSalaDeJuegos/apirestjugadores/ranking/alta",juego)
    .then(datos => {
      console.log(JSON.stringify(datos));
    })
    .catch(error => {console.log(error)});    
  }
  /*public listar(): Array<Juego> {

    let miArray: Array<Juego> = new Array<Juego>();
 
    miArray.push(new JuegoAdivina("Juego 1", false));
    miArray.push(new JuegoAdivina("Pepe", true));
    miArray.push(new JuegoAdivina("Juego 3", false));
    miArray.push(new JuegoAdivina("Juego 4", false));
    miArray.push(new JuegoAdivina("Juego 5", false));
    miArray.push(new JuegoAdivina("Juego 6", false));
    return miArray;
  }

  public listarPromesa(): Promise<Array<Juego>> {
    let promesa: Promise<Array<Juego>> = new Promise((resolve, reject) => {
      let miArray: Array<Juego> = new Array<Juego>();
      miArray.push(new JuegoAdivina("JuegoPromesa 1", false,"promesa"));
      miArray.push(new JuegoAdivina("PepePromesa", true));
      miArray.push(new JuegoAdivina("JuegoPromesa 3", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 4", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 5", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 6", false));
      resolve(miArray);
    });

    return promesa;
  }*/


}
