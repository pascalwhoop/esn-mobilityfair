import {Component, EventEmitter, Output} from '@angular/core';

/*
  Generated class for the MobileNavbar component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'mobile-navbar',
  templateUrl: 'mobile-navbar.html'
})
export class MobileNavbarComponent {

  @Output()
  menu: EventEmitter<any> = new EventEmitter<any>();

  constructor() {

  }

  toggleMenu(){
     this.menu.emit(null);
  }

}
