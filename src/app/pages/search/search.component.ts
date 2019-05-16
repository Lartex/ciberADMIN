import { CrudService } from './../../services/crud.service';
import { ActivatedRoute } from '@angular/router';
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
              private crud:CrudService
    ) { }

  ngOnInit() {

    this._activatedRoute.params.subscribe( params => {
      this.term = params['term'];
        this.users = this.crud.searchUser(params['term']);
        console.log(this.users);
    })

  }

}

