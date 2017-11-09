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
    localStorage.setItem("token","por ahora no funciona la api");
    localStorage.setItem("usuario","");
  }
  LogIn(){
    // this.miHttp.httpPostPromise("http://localhost"/*:8080*/+"/apirestSalaDeJuegos/apirestjugadores/jugador/logIn",this.usuarioLogIn)
    // .then(datos => {
    //   //console.info(datos);
    //   console.log(JSON.stringify(datos));
    //   localStorage.setItem("token",datos["token"]);
    //   localStorage.setItem("usuario",datos["jugador"]["usuario"]);
    //   this.router.navigate(['/Juegos']);
    // })
    // .catch(error => {console.log(error)});
    let logIn:boolean = false;
    let ListadoUsuarios:any = JSON.parse(localStorage.getItem('listaUsuario'));
    ListadoUsuarios.forEach(element => {
      if (element.username == this.usuarioLogIn.username && element.password == this.usuarioLogIn.password) {
        logIn = true;
        console.log("Login = "+logIn);
        localStorage.setItem("usuario",element.username);
        this.router.navigate(['/Juegos']);
      }
    });
  }
  SignUp(){
    //  this.miHttp.httpPostPromise("http://localhost"/*:8080*/+"/apirestSalaDeJuegos/apirestjugadores/jugador/alta",this.usuarioSignUp)
    // .then(datos => {
    //   console.log(JSON.stringify(datos));
    //   alert(datos["respuesta"]);
    // })
    // .catch(error => {console.log(error)});
    let lista:any = localStorage.getItem['listaUsuario'];
    let listado:any;
    if (lista != "") {
      listado = JSON.parse(lista);
      listado.push(this.usuarioSignUp);
      localStorage.setItem('listaUsuario',JSON.stringify(listado));
    }
    else{
      localStorage.setItem('listaUsuario',JSON.stringify(this.usuarioSignUp));
    }
  }

}