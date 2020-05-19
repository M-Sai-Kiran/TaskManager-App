import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { LoginViewModel } from '../login-view-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginViewModel:LoginViewModel = new LoginViewModel();
  errorMessage:string="";
  constructor(private loginService:LoginService,public router:Router) { }

  ngOnInit(): void {
  }

  onLoginClick($event){
    $event.preventDefault();
    this.loginService.Login(this.loginViewModel).subscribe((response)=>{
      this.router.navigateByUrl('/dashboard');
    },(error)=>{
      console.log(error);
      this.errorMessage="Invalid Credentials";
    });
  }

}
