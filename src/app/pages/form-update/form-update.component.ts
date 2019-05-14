import { ActivatedRoute } from '@angular/router';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styles: []
})
export class FormUpdateComponent implements OnInit {

  id:any;
  data:object = {};


  constructor(private _crud: CrudService,
              private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {

  }

  updateUser(values){

    this._activatedRoute.params.subscribe(params => this.id = params);

    const user = {
      "firstName": values.name,
      "lastName": values.apellidos,
      "percent_dedication": values.dedicacion,
      "experience": values.experiencia,
      "in_project": values.proyecto,
      "technology": values.tech
    };

    this._crud.updateUser(user, this.id.id)
      .subscribe(data => console.log(data))

  }


}
