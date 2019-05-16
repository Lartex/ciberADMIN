import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url: string = 'http://localhost:4000';
  users: any;

  constructor(private http: HttpClient) {

  }

  getUsers() {
    return this.http.get(this.url + '/users')
      .pipe(map(res => {
        this.users = res;
        return res;
      }))
  }

  addNewUser(user) {
    return this.http.post(this.url + '/users/', user);
  }

  deleteUser(id) {
    return this.http.delete(this.url + '/users/' + id);
  }

  updateUser(user, id) {
    return this.http.put(this.url + '/users/' + id, user);
  }

  searchUser(term: string) {
    let userArr = []
    term = term.toLowerCase();

    for (let user of this.users) {
      let name = user.firstName.toLowerCase();
      let technology = user.technology.toLowerCase();
      if (name.indexOf(term) >= 0) {
        userArr.push(user);
      }
      if (technology.indexOf(term) >= 0) {
        userArr.push(user);
      }


    }

    return userArr;
  }

  getOneUser(idx:string ){
    return this.users[idx];
  }



}
