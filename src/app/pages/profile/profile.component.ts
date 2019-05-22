import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

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

  constructor(private _activatedRoute: ActivatedRoute,
    private crud: CrudService,
    private router: Router) {

    this.getParams();
  }

  ngOnInit() {
    this.techs = [
      { id: 1, name: 'Angular' },
      { id: 2, name: 'Vue' },
      { id: 3, name: 'Nodejs' },
      { id: 4, name: 'Java' }
    ]
  }

  //Funcion que hace el update del usuario desde el perfil de usuario
  updateUser(values) {

    const user = {
      "firstName": values.name,
      "lastName": values.apellidos,
      "percent_dedication": values.dedicacion,
      "experience": values.experiencia,
      "in_project": values.proyecto,
      "technology": values.tech,
      "date_enter": this.user.date_enter,
      "date_now": this.user.date_now
    };

    this.crud.updateUser(user, this.user.id)
      .subscribe(data => {
        console.log(data);
      });

  }

  //Funcion que elimina al usuario.
  deleteUser(id) {
    if (confirm("¿Estas seguro?")) {
      this.crud.deleteUser(id)
        .subscribe(
          res => {
            this.router.navigate(['/dashboard'])
          }
        );
    }

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




}
