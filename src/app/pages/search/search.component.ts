import { CrudService } from './../../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  users:any;
  term:string;

  constructor(private _activatedRoute:ActivatedRoute,
              private crud:CrudService,
              private router:Router
    ) { }

  ngOnInit() {

   this.getParams();

  }

  seeUser( idx:string) {
    this.getParams();
    window.scrollTo(0,0);
    this.router.navigate(['/search', this.term, idx])
  }


  getParams(){
    this._activatedRoute.params.subscribe( params => {
      this.term = params['term'];
        this.users = this.crud.searchUser(params['term']);
        console.log(this.users);
    })
  }

}

