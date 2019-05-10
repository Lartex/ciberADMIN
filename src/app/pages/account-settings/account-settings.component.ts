import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
          public settings : SettingsService) { }

  ngOnInit() {
    this.putCheck();
  }

  changeColor(theme:string, link: any){

    this.check(link);

    this.settings.applyTheme( theme );


  }

  check( link: any){

    let selectores:any = document.getElementsByClassName('selector');

    for ( let ref of selectores){
        ref.classList.remove('working');
    }

    link.classList.add('working');

  }


  putCheck(){

    let selectores:any = document.getElementsByClassName('selector');

    let theme = this.settings.settings.theme;


    for ( let ref of selectores){
     if(  ref.getAttribute('data-theme') === theme) {
      ref.classList.add('working');
      break;
     }
  }


  }

}
