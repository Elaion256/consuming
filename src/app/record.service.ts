import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable() 

 export class RecordService {

 /*esta es una clase vacia para construir el handler de las peticiones http*/ 
  constructor (private http: HttpClient) {

  }
/* el metodo de la clase RecordService para llamar a la API , en est caso , el app.component.ts
lo suscribe para obtener los datos de forma asincronica
en este caso es solo para obtener el token del usuario 

para efectos de prueba, localize una muestra de respuesta en un JSON local, en la carpeta assets
el cual me devolvia el objeto del json sin problemas para manipularlo
*/
  getData(){
  	return this.http.get("http://localhost:4200/assets/db.json")
  }


 }
	 

    
	 
