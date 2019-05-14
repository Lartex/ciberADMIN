import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit{

  users:any;
  confirmText:string = "El usuario fue añadido con éxito."
  isAdded:boolean;


  constructor(private _crudService: CrudService) { }


  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
        this._crudService.getUsers()
          .subscribe( data => this.users = data);
  }

  addNewUser(user){

     const userObj = {
      "firstName": user.name,
      "lastName": user.apellidos,
      "percent_dedication": user.dedicacion,
      "experience": user.experiencia,
      "in_project": user.proyecto,
      "technology": user.tech
  };

  this._crudService.addNewUser(userObj)
      .subscribe(
          res => {
           this.isAdded = true;

          }
      );

  }



}
