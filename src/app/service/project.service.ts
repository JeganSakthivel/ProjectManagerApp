import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable,throwError } from 'rxjs';
import { map,catchError } from   'rxjs/operators';
import { Project } from '../Model/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

 

  constructor(private http: Http) { }


  readAll(){
    return this.http.get("http://localhost:8080/api/projects/").
    //return this.http.get("https://jsonplaceholder.typicode.com/users").
      pipe( 
        map( res => {
          console.log(res);
          return res.json();
      }),
      catchError(err => {
        console.log('Handling error locally and rethrowing it...', err);
        return throwError(err);
    })
  );
  }

  getProjectById(id:number){
    return this.http.get("http://localhost:8080/api/projects/"+id).
      pipe(
         map( (res : any)=> {
          console.log(res);
          return res.json();
      }),
      catchError(err => {
        console.log('Handling error locally and rethrowing it...', err);
        return throwError(err);
    })
  );
 } 
  

 

  saveProject(projectData:Project){
    console.log('project data..'+ projectData);

    return this.http.post("http://localhost:8080/api/projects/add", projectData).
        pipe( map( res => {
              console.log(res);
              return res.json();
        }),
        catchError(err => {
          console.log('Handling error locally and rethrowing it...', err);
          return throwError(err);
      })
        );
  }

}
