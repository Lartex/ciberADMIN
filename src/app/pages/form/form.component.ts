import { CrudService } from './../../services/crud.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit{

  @ViewChild('userData') public createForm: NgForm;
  users:any;
  name:string;
  confirmText:string = "El usuario fue añadido con éxito."
  isAdded:boolean;
  date_now;
  techs:any[] = [];
  newUserAdded:any;





  constructor(private _crudService: CrudService) { }


  ngOnInit() {
    this.getUsers();

    this.techs = [
      {id:1, name:'Angular'},
      {id:2, name:'Vue'},
      {id:3, name:'Nodejs'},
      {id:4, name:'Java'}
    ]


  }

  getUsers(){
        this._crudService.getUsers()
          .subscribe( data => {
            this.users = data;
            console.log(this.users)
          });
  }

  addNewUser(user){

    let date_enter = new Date().toLocaleString("es-EU", {timeZone: "Europe/Madrid"});


     const userObj = {
      "firstName": user.name,
      "lastName": user.apellidos,
      "percent_dedication": user.dedicacion,
      "experience": user.experiencia,
      "in_project": user.proyecto,
      "technology": user.tech,
      "date_enter": date_enter.toLocaleString(),
      "date_now": ''

  };

  this._crudService.addNewUser(userObj)
      .subscribe(
          res => {
           this.isAdded = true;
           this.newUserAdded = res;
          }
      );


      this.createForm.reset();

  }



}
