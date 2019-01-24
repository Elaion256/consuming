import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInterface } from '../models/UserInterface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private Auth : AuthService) { }
   

  ngOnInit() {

  }

  onLogin(event) {

  event.preventDefault()
 //coleccionamos las variabes de nuestro formulario 
   const target = event.target;
   const usrname = target.querySelector("#name").value;
   const pass   = target.querySelector("#pass").value;
// las pasamos a nuestra funcion para pasar los parametros para 
// postearlos a la URL que nos devolverá el token
   this.Auth.getUserToken(usrname , pass)
    
 }

}