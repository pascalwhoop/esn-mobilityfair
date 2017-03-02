import {Component} from "@angular/core";
import {WhyExhibitorsPage} from "../../pages/why-exhibitors/why-exhibitors";
import {WhyStudentsPage} from "../../pages/why-students/why-students";
import {PartnersPage} from "../../pages/partners-page/partners-page";
import {UniversitiesOverviewPage} from "../../pages/universities-overview/universities-overview";
import {NavController} from "ionic-angular";

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


  menuToggle: boolean = false;

  constructor(private navCtrl: NavController) {

  }

  toggleMenu(){
     this.menuToggle = !this.menuToggle;
  }

  goWhyExhibitor(){
    this.navCtrl.push(WhyExhibitorsPage);
    this.menuToggle = false;
  }

  goWhyStudent(){
    this.navCtrl.push(WhyStudentsPage);
    this.menuToggle = false;
  }

  goPartners(){
    this.navCtrl.push(PartnersPage);
    this.menuToggle = false;
  }

  goUniversitiesOverview(){
    this.navCtrl.push(UniversitiesOverviewPage)
  }

}
