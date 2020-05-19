import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Taskmanager';
  //we are importing login service into this constructor because service is a singleton object and it contains the user name which can be used to manipulate the dashboard menu items.
  constructor(public loginService:LoginService){}
}
