import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {


  menu: any= [
    {
      title: 'Empleados',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard', url: '/dashboard'},
        { title: 'Alta empleado', url: '/form'},
        { title: 'Settings', url: '/account-settings'},
      ]
    }
  ];

  constructor() { }
}
