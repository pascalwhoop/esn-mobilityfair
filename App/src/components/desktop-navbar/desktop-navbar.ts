import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {WhyStudentsPage} from "../../pages/why-students/why-students";
import {WhyExhibitorsPage} from "../../pages/why-exhibitors/why-exhibitors";
import {PartnersPage} from "../../pages/partners-page/partners-page";
import {UniversitiesOverviewPage} from "../../pages/universities-overview/universities-overview";
import {AboutPage} from "../../pages/about/about";
import {SpeakersPage} from "../../pages/speakers/speakers";

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

  isHome():boolean{
    return this.navCtrl.getActive().name == 'AboutPage';
  }

  goHome(){
    this.navCtrl.setRoot(AboutPage);
  }

  goWhyExhibitor(){
    this.navCtrl.push(WhyExhibitorsPage)
  }

  goSpeakers(){
    this.navCtrl.push(SpeakersPage)
  }

  goWhyStudent(){
    this.navCtrl.push(WhyStudentsPage)
  }
  goUniversitiesOverview(){
    this.navCtrl.push(UniversitiesOverviewPage)
  }
  goPartners(){
    this.navCtrl.push(PartnersPage)
  }

}
