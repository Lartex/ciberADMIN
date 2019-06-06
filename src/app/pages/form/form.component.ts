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

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  technology= [{value: 'Sin tecnología', tech: 0}];


  constructor(private _crudService: CrudService) {

    this.dataselect = this._crudService.dataSelect();
   }


  ngOnInit() {

    this.dropdownList = [
        {id:1, name:'Santander'},
        {id:2, name:'Proyecto 1'},
        {id:3, name:'Proyecto 2'},
        {id:4, name:'Sin proyecto'}
    ];
    this.selectedItems = [
      {id:4, name:'Sin proyecto'},
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Seleccionar todos',
      unSelectAllText: 'Quitar todo',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

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
      "role": user.rol,
      "experience": user.experience,
      "in_project": user.project,
      "date_enter": date_enter.toLocaleString(),
      "date_now": '',
      "technology": this.technology,
      "bio": user.bio

  };

  this._crudService.addNewUser(userObj)
      .subscribe(
          res => {
           this.isAdded = true;
          }
      );

      this.createForm.reset();

  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }


  add() {
    this.technology.push({value: 'Nombre tecnologia', tech: 0});
  }

  remove(){
    this.technology.pop();

  }

}
