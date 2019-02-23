import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { JsonHandler} from './JsonHandler';



@Injectable({
  providedIn: 'root',
})

export class AuthService {

  constructor (private _http: HttpClient,
               private _jsonHandler : JsonHandler) {
  
   }
// funcion para obtener el token de'l usuario
  getUserToken(usr, pass: string): Observable<JsonHandler> {
   
    return this._http.get<JsonHandler>("http://localhost:4200/data/user.json")
    
                           

 // es aqui donde colocamos los parametros en los header de 
 // aunque los headers aparecen en la peticion, la respuesta sigue siendo 400
 // desde la API REST de tuten, aunque, previamente testeado con postman con exito.

 //el parametro usuario esta insertado en la URL para garantizar el funcionamiento demostrativo
 // 
 /*
    return this.http.put("https://dev.tuten.cl/TutenREST/rest/user/testapis%40tuten.cl", { headers :{
    'Content-Type': 'application/json',
    'Pass': pass,
    'App': 'APP_BCK'
  } } )
    .subscribe(data => {
    	console.log("tenemos esto desde este servidor", data)
    })
  }

*/
    }

}
