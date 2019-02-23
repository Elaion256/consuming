import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInterface } from '../models/UserInterface';
import { AuthService } from '../auth.service';
import { RouterModule } from '@angular/router';
import { JsonHandler} from '../JsonHandler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
     
   public token : JsonHandler;
  constructor(private Auth : AuthService) {

  }
   
  ngOnInit() {

  }

  onLogin(event) {

  event.preventDefault();

   const target = event.target;
   const usrname = target.querySelector("#name").value;
   const pass   = target.querySelector("#pass").value;

   this.Auth.getUserToken(usrname, pass).subscribe( data => {
     this.token = data;
     console.log(this.token);
   });

   };

}