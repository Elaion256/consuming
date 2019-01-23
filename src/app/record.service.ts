import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'



@Injectable() 

 export class RecordService {



 /*esta es una clase vacia para construir el handler de las peticiones http*/ 
  constructor (private http: HttpClient) {

  }

  getData(){
  	return this.http.get("http://localhost:4200/assets/db.json")
  }


 }
	 

    
	 
