import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projects } from './projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http:HttpClient) { }

  getProjects():Observable<Projects[]>{
    // let headers =  new HttpHeaders();
    // let currentUser:string = sessionStorage.getItem('currentUser');
    // if(currentUser != null){
    //   let user = JSON.parse(currentUser);
    //   headers = headers.set('auth-token',user.token)
    // }
    return this.http.get<Projects[]>('http://localhost:8000/api/projects',{responseType:"json"});
  }

  insertProject(newProject:Projects):Observable<Projects>{
    return this.http.post<Projects>('http://localhost:8000/api/projects',newProject,{responseType:"json"});
  }

  updateProject(existingProject:Projects):Observable<Projects>{
    return this.http.put<Projects>('http://localhost:8000/api/projects',existingProject,{responseType:"json"});
  }
}
