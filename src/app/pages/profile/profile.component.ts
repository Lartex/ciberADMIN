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

  user:any ={}
  id:any;
 techs:any[] = []
 date_now:any;

  constructor(private _activatedRoute:ActivatedRoute,
                 private crud:CrudService,
                 private router:Router ) {

                  this.getParams();
   }

  ngOnInit() {

    this.getData();

    this.techs = [
      {id:1, name:'Angular'},
      {id:2, name:'Vue'},
      {id:3, name:'Nodejs'},
      {id:4, name:'Java'}
    ]
  }



  updateUser(values){


    this.getParams();

    const user = {
      "firstName": values.name,
      "lastName": values.apellidos,
      "percent_dedication": values.dedicacion,
      "experience": values.experiencia,
      "in_project": values.proyecto,
      "technology": values.tech,
      "date_now": values.dateNow
    };

    this.crud.updateUser(user, this.user.id)
      .subscribe(data => {
        this.getParams();
        console.log(this.getParams())
      })

  }


  deleteUser(id){
    if(confirm("¿Estas seguro?")){
     this.crud.deleteUser(id)
     .subscribe(
       res => {
        this.router.navigate(['/dashboard'])
       }
     );
    }

  }

  getParams(){
    this._activatedRoute.params.subscribe(params => {
      this.user = this.crud.getOneUser( params['id']);
      console.log(this.user)

    })
  }

  getData(){
    this.crud.getUsers()
      .subscribe( data => {
        for (let prop in data) {
          this.date_now = moment(data[prop].date_enter, "YYYYMMDD").fromNow();
           this.user.date_now = this.date_now ;
           console.log(this.date_now );


         }
      });
}


}
