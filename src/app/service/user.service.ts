import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable,throwError } from 'rxjs';
import { map,catchError } from   'rxjs/operators';
import { User } from 'src/app/Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formData  : User;
  userObject : Object = {};

  constructor(private http:Http) { }

  

  create(userData){
    console.log(userData);

    return this.http.post("http://localhost:8080/api/users/add", userData).
    //return this.http.post("https://jsonplaceholder.typicode.com/users", userData).
        pipe( map( res => {
              console.log(res);
              return res.json();
        })
        );
  }

  readAll(){
    return this.http.get("http://localhost:8080/api/users/").
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



  getUserById(id:number){
    return this.http.get("http://localhost:8080/api/users/"+id).
    //return this.http.get("https://jsonplaceholder.typicode.com/users").
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


handleError(error: any) {
  console.log(error);
  return throwError("Server error occured");
}

 /* getUserById(id: number): Observable<User> {
    return this.http.get<User>("http://localhost:8080/api/users/" + id)
    .pipe(
      catchError(e => this.handleError(e)));
  }*/

  delete(id){
    return this.http.delete("http://localhost:8080/api/users/delete/" + id).
    pipe(  map( res => {
          console.log(res);
          return res.json();
    })
    );
  }

  update(userId, userObj){
    return this.http.put("http://localhost:8080/api/users/update/"+ userId, userObj)
      .pipe ( map( res => {
          console.log(res);
          return res.json();
      })
    );
  }

  

}
