import { Component, OnInit } from '@angular/core';
import { MiHttpService } from '../../servicios/mi-http.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  usuarioLogIn:any={
    username:"",
    password:""
  }
  usuarioSignUp:any={
    username:"",
    password:"",
    email:""
  }
  constructor(public miHttp:MiHttpService,private route: ActivatedRoute,private router: Router) {  }

  ngOnInit() {
  }
  LogIn(){
    this.miHttp.httpPostPromise("http://localhost:8080/apirestSalaDeJuegos/apirestjugadores/jugador/logIn",this.usuarioLogIn)
    .then(datos => {
      //console.info(datos);
      console.log(JSON.stringify(datos));
      localStorage.setItem("token",datos["token"]);
      localStorage.setItem("usuario",datos["jugador"]["usuario"]);
      this.router.navigate(['/Juegos']);
    })
    .catch(error => {console.log(error)});    
  }
  SignUp(){
    this.miHttp.httpPostPromise("http://localhost:8080/apirestSalaDeJuegos/apirestjugadores/jugador/alta",this.usuarioSignUp)
    .then(datos => {
      console.log(JSON.stringify(datos));
      alert(datos["respuesta"]);
    })
    .catch(error => {console.log(error)});    
  }

}