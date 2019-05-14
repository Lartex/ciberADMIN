import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit{

  users:any;
  id:number;




  constructor(private _crudService: CrudService,
              private router:Router) { }


  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
        this._crudService.getUsers()
          .subscribe( data => this.users = data);
  }


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





}
