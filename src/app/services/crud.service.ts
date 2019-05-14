import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url:string = 'http://localhost:4000';
    private headers = new HttpHeaders({ 'Content-Type' : 'application/json'});

  constructor(private http:HttpClient) {


  }



  getUsers(){
    return this.http.get(this.url + '/users')
      .pipe(map( res => {
       return res;
      }))
  }


  addNewUser(user){
    return this.http.post(this.url + '/users/', user);
  }

  deleteUser(id) {
    return this.http.delete(this.url + '/users/' + id);
  }

  updateUser(user, id) {
    return this.http.put(this.url + '/users/' + id, user);
  }




}
