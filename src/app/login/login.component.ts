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

   const target = event.target;
   const usrname = target.querySelector("#name").value;
   const pass   = target.querySelector("#pass").value;

   this.Auth.getUserToken(usrname , pass)
    

  	/*
      this.http.put("https://dev.tuten.cl:443/TutenREST/rest/user/testapis%40tuten.cl", 
     {headers: {'Acept': 'Application/json', 'password': this.user.pass, 'app': this.user.app} })
      .subscribe(data => { 
      	console.log("y que obtenemos?", data)*/

 }

}