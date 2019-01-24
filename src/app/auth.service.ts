import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor (private http: HttpClient) {
  
   }
// funcion para obtener el token del usuario
  getUserToken(usr, pass: string[]){
   
 // es aqui donde colocamos los parametros en los header de 
 // aunque los headers aparecen en la peticion, la respuesta sigue siendo 400
 // desde la API REST de tuten, aunque, previamente testeado con postman con exito.

 //el parametro usuario esta insertado en la URL para garantizar el funcionamiento demostrativo
 // 
    return this.http.put("https://dev.tuten.cl/TutenREST/rest/user/testapis%40tuten.cl", { headers :{
    'Content-Type': 'application/json',
    'Pass': pass,
    'App': 'APP_BCK'
  } } )
    .subscribe(data => {
    	console.log("tenemos esto desde este servidor", data)
    })
  }
}
