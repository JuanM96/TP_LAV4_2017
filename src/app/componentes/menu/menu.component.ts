import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'Anagrama':
          this.router.navigate(['/Juegos/Anagrama']);
        break;
      case 'AgilidadaMasListado':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
      case 'PiedraPapelTijera':
          this.router.navigate(['/Juegos/PiedraPapelTijera']);
      break;
      case 'TicTacToe':
          this.router.navigate(['/Juegos/TicTacToe']);
      break;
      case 'Historial':
          this.router.navigate(['/Juegos/Historial']);
      break;
      case 'QuienSoy':
          this.router.navigate(['/Juegos/QuienSoy']);
      break;
    }
  }
  Salir(){
    localStorage.setItem('token',"");
    localStorage.setItem('usuario',"");
    this.router.navigate(["/"]);
  }
  
}
