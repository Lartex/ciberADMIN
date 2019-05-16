import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'moment';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit{

  users:any;
  id:number;
  date_now = new Date();


  constructor(private _crudService: CrudService,
              private router:Router) { }


  ngOnInit() {
    this.getUsers();
/*    this.getData(); */


  }

  getUsers(){
        this._crudService.getUsers()
          .subscribe( data => {
            this.users = data;
            console.log( this.users)
          });
  }


/* funcion para coger todas las fechas

    getData(){
        this._crudService.getUsers()
          .subscribe( data => {
            for (let prop in data) {
               let date1 = data[prop].date_enter;
          }
          });
  }
 */



  deleteUser(id){
    if(confirm("¿Estas seguro?")){
     this._crudService.deleteUser(id)
     .subscribe(
       res => {
         this.getUsers();
       }
     );
    }

  }

  seeUser( idx:string) {
    this.router.navigate(['/user', idx])
  }




}
