import { Component } from '@angular/core';
import {WhyStudentsPage} from "../../pages/why-students/why-students";
import {WhyExhibitorsPage} from "../../pages/why-exhibitors/why-exhibitors";
import {NavController} from "ionic-angular";
import {PartnersPage} from "../../pages/partners-page/partners-page";

/*
  Generated class for the CombinedNavbar component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'combined-navbar',
  templateUrl: 'combined-navbar.html'
})
export class CombinedNavbarComponent {


  menuToggle: boolean = false;
  
  constructor(private navCtrl: NavController) {
  }



  toggleMenu(menuToggle){
    this.menuToggle = !this.menuToggle;
  }

  goWhyExhibitor(){
    this.navCtrl.push(WhyExhibitorsPage)
    this.menuToggle = false;
  }

  goWhyStudent(){
    this.navCtrl.push(WhyStudentsPage)
    this.menuToggle = false;
  }

  goPartners(){
    this.navCtrl.push(PartnersPage)
    this.menuToggle = false;
  }

}
