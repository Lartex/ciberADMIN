import { ModalComponent } from './../modal/modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import * as moment from 'moment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  user: any = {}
  id: any;
  techs: any[] = []
  date_now: any;
  date_thismoment: any;
  dataselect:any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  technology= [{value: 'Sin tecnología', tech: 'Nivel'}];
  modalRef: BsModalRef;
  message: string;
  width:any;


  constructor(private _activatedRoute: ActivatedRoute,
    private crud: CrudService,
    private router: Router,
    private modalService: BsModalService) {

      this.dataselect = this.crud.dataSelect();
      this.getUsers();
    }

    ngOnInit() {

      //Variable relacionada con las dynamic progress bars



      //Configuracion para el correcto uso del dropdown de proyectos
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

  }

  getUsers(){
    this.crud.getUsers()
      .subscribe(data => {
        this.user = data;
        console.log(this.user)
        this.getParams();
        this.technology = this.user.technology;
        this.width = this.user.technology[0].tech;
      });


  }



  //Funcion que hace el update del usuario desde el perfil de usuario
  updateUser(values) {

    const user = {
      "firstName": values.name,
      "lastName": values.lastName,
      "role": values.rol,
      "experience": values.experience,
      "in_project": values.project,
      "date_enter": this.user.date_enter,
      "date_now": this.user.date_now,
      "technology": this.technology,
      "bio": values.bio
    };

    this.crud.updateUser(user, this.user.id)
      .subscribe(data => {
        console.log(data);
      });

  }

  //Funcion que elimina al usuario.
  deleteUser(id) {
    this.modalRef.hide();
      this.crud.deleteUser(id)
        .subscribe(
          res => {
            this.router.navigate(['/dashboard'])
          }
        );


  }

  //Funcion que obtiene todos los datos del id del usuario en el que estamos.
  getParams() {
    this._activatedRoute.params.subscribe(params => {
      this.user = this.crud.getOneUser(params['id']);


      this.date_now = moment(this.user.date_enter, 'DD/MM/YYYY');
      this.date_thismoment = moment(new Date(), 'DD/MM/YYYY');

      let days = this.date_thismoment.diff(this.date_now, 'days');
      this.user.date_now = days;


      console.log(this.user)

    })
  }


  //Control de añadir/eliminar tecnologias

  add() {
    this.technology.push({value: 'Nombre', tech: 'Nivel'});
  }


  remove(){
    this.technology.pop();

  }

  //Control del modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }



}
