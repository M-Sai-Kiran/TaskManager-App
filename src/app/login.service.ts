import { Injectable } from '@angular/core';
import {HttpClient, HttpBackend} from '@angular/common/http';
import { LoginViewModel } from './login-view-model';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private http:HttpClient; 
  constructor(private httpBackend:HttpBackend, private jwtHelperSerivce:JwtHelperService) { }
  
  currentUserName:string = null;

  public Login(loginViewModel:LoginViewModel):Observable<any>{
    this.http = new HttpClient(this.httpBackend);
    return this.http.post<any>("http://localhost:8000/api/login",loginViewModel,{responseType:"json"})
    .pipe(map(user=>{
      if(user) {
        this.currentUserName = user.name;
        sessionStorage.setItem('currentUser',JSON.stringify(user));
      }
      return user;
    })
    );
  }

  public Logout(){
    sessionStorage.removeItem('currentUser')
    this.currentUserName=null;
  }
  public isAuthenticated():boolean{
    let token = sessionStorage.getItem('currentUser')?JSON.parse(sessionStorage.getItem('currentUser')).token:null;
    if(this.jwtHelperSerivce.isTokenExpired(token)) return false;
    else return true;
  }
}
