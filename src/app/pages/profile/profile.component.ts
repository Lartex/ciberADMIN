import { ActivatedRoute, Router } from '@angular/router';
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
 techs:any[] = []

  constructor(private _activatedRoute:ActivatedRoute,
                 private crud:CrudService,
                 private router:Router ) {

                  this.getParams();
   }

  ngOnInit() {

    this.techs = [
      {id:1, name:'Angular'},
      {id:2, name:'Vue'},
      {id:3, name:'Nodejs'},
      {id:4, name:'Java'}
    ]
  }



  updateUser(values){


    this._activatedRoute.params.subscribe(params => {
      this.user = this.crud.getOneUser( params['id']);
      console.log(this.user)

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
      .subscribe(data => {
        this.getParams();
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

    })
  }


}
