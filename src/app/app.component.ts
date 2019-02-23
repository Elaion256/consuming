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
     
   /*
   	this.records = this.Cn_Service.getData().subscribe(data => {
  		 console.log("Esto es lo que obtenemos", data)
       
  	}) */
   }
}
