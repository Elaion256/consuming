import { Component, OnInit } from '@angular/core';
import { UserInterface} from './models/UserInterface';
import { AuthService } from ''

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor() { }
   
  private user: UserInterface = {
  	name : '',
  	pass : '',
  	app  : 'APP_BACK'
  }
  ngOnInit() {
  }
  ngOnLogin(): void {}

}
