import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {WhyStudentsPage} from "../../pages/why-students/why-students";
import {WhyExhibitorsPage} from "../../pages/why-exhibitors/why-exhibitors";
import {PartnersPage} from "../../pages/partners-page/partners-page";

/*
  Generated class for the DesktopNavbar component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'desktop-navbar',
  templateUrl: 'desktop-navbar.html'
})
export class DesktopNavbarComponent {

  text: string;

  constructor(private navCtrl: NavController) {

  }

  goWhyExhibitor(){
    this.navCtrl.push(WhyExhibitorsPage)
  }

  goWhyStudent(){
    this.navCtrl.push(WhyStudentsPage)
  }
  goPartners(){
    this.navCtrl.push(PartnersPage)
  }

}
