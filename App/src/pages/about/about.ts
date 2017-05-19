import {Component} from "@angular/core";
import {App, NavController} from "ionic-angular";
import {Http} from "@angular/http";
import "rxjs/Rx";
import {WhyExhibitorsPage} from "../why-exhibitors/why-exhibitors";
import {WhyStudentsPage} from "../why-students/why-students";

/*
  Generated class for the About page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  targets = {
    whyexhibitors : WhyExhibitorsPage,
    whystudents: WhyStudentsPage
  }

  constructor(public navCtrl: NavController, public http: Http,public app: App) {
    this.app._setRootNav(this.navCtrl)
  }

  

}
