import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  user:any ={}
  id:any;

  constructor(private _activatedRoute:ActivatedRoute,
                 private crud:CrudService  ) {

    this._activatedRoute.params.subscribe(params => {
      this.user = this.crud.getOneUser( params['id']);

    })
   }

  ngOnInit() {

  }



  updateUser(values){


    this._activatedRoute.params.subscribe(params => {
      this.user = this.crud.getOneUser( params['id']);

    })


    const user = {
      "firstName": values.name,
      "lastName": values.apellidos,
      "percent_dedication": values.dedicacion,
      "experience": values.experiencia,
      "in_project": values.proyecto,
      "technology": values.tech
    };

    this.crud.updateUser(user, this.user.id)
      .subscribe(data => console.log(data))

  }


}
