import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  users: any;
  id: number;
  date_now: any;
  date_thismoment;


  constructor(private _crudService: CrudService,
    private router: Router) {

  }


  ngOnInit() {
    this.getUsers();
    this.getData();

    /* let a = moment('1/1/2012', 'DD/MM/YYYY');
    let b = moment('1/1/2013', 'DD/MM/YYYY');
    let days = b.diff(a, 'days');
    console.log
     */

  }

  getUsers() {
    this._crudService.getUsers()
      .subscribe(data => {
        this.users = data;
        console.log(this.users)
      });
  }


  getData() {
    this._crudService.getUsers()
      .subscribe(data => {
        for (let prop in data) {
          this.date_now = moment(data[prop].date_enter, 'DD/MM/YYYY');
          this.date_thismoment = moment(new Date(), 'DD/MM/YYYY');

          let days = this.date_thismoment.diff(this.date_now, 'days');

          this.users[prop].date_now = days;


        }
      });
  }



  deleteUser(id) {
    if (confirm("¿Estas seguro?")) {
      this._crudService.deleteUser(id)
        .subscribe(
          res => {
            this.getUsers();
          }
        );
    }

  }

  seeUser(idx: string) {
    window.scrollTo(0, 0);
    this.router.navigate(['/user', idx])
  }



}



// getData() {
//   this._crudService.getUsers()
//     .subscribe(data => {
//       for (let prop in data) {
//         this.date_now = moment(data[prop].date_enter, "DDMMYYYY").fromNow();
//         this.users[prop].date_now = this.date_now;
//         console.log(this.date_now);


//       }
//     });
// }
