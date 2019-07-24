import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
  <ul class="navbar-nav mr-auto">
  <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" *ngFor= "let item of navObjects">
    <a class="nav-link" routerLink="{{ item.link }}">{{ item.name }} </a>
  </li>
</ul>
  `,
  styles: []
})
export class NavComponent implements OnInit {

  /*<li class="nav-item" *ngFor= "let item of navItems">
  <a class="nav-link" routerLink="{{ item.link }}">{{ item.name }} </a>
  </li>
   */

  navItems:string[]; 

  navObjects : Object[];

  constructor() {

    this.navItems = [
      "addProject",
      "addTask",
      "addUser",
      "viewTask"

    ]

    this.navObjects = [
      { name: 'addProject', link :'/addProject'},
      { name: 'AddTask', link : '/AddTask'},
      { name: 'AddUser', link : '/AddUser'},
      { name: 'ViewTask', link : '/ViewTask'}
      
    ]

   }

  ngOnInit() {
  }

}
