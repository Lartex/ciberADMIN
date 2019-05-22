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
  confirmText:string = "El usuario fue añadido con éxito."
  isAdded:boolean;
  date_now;

  dataselect:any;



  constructor(private _crudService: CrudService) {

    this.dataselect = this._crudService.dataSelect();
   }


  ngOnInit() {
    this.getUsers();

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
      "lastName": user.lastName,
      "percent_dedication": user.dedication,
      "experience": user.experience,
      "in_project": user.project,
      "technology": user.tech,
      "date_enter": date_enter.toLocaleString(),
      "date_now": ''

  };

  this._crudService.addNewUser(userObj)
      .subscribe(
          res => {
           this.isAdded = true;
          }
      );

      this.createForm.reset();

  }



}
