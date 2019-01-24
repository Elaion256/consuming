import { Component } from '@angular/core';
import { RecordService } from './record.service';	




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Consuming';

  records = {};
   constructor ( private Cn_Service : RecordService){
   }

   ngOnInit(){
   // esto es una funcion de prueba en donde 
    //se verifica que el servicio "records service"
    // pueda se accesible desde la URL especificada
    //y que pueda devolver los datos para leerlos y 
    // obtener el token y/o manipular los registros 
    // derivados de la APi REST booking de tuten
   	this.records = this.Cn_Service.getData().subscribe(data => {
  		 console.log("Esto es lo que obtenemos", data)
       
  	})
   }
}
