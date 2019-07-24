import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable,throwError } from 'rxjs';
import { map,catchError } from   'rxjs/operators';
import { Task } from 'src/app/Model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: Http) { }

getParentTaskById(id: number){
    return this.http.get("http://localhost:8080/api/parentTasks/"+id).
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

getTasksByProjectId(id:number) {
  return this.http.get("http://localhost:8080/api/task/projectId/"+id).
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

getParentTasks(){
  return this.http.get("http://localhost:8080/api/parentTasks").
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

getTasks(){
  return this.http.get("http://localhost:8080/api/tasks").
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


getTasksById(id){
  return this.http.get("http://localhost:8080/api/tasks/" + id).
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
  
  

  // save Task
  saveTask(task: Task) {
    return this.http.post("http://localhost:8080/api/tasks/add", task).
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

  saveParentTask(task: Task) {
    return this.http.post("http://localhost:8080/api/parentTasks/add", task).
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
