import {Component} from "@angular/core";
import {NavController, NavParams, App, DeepLinker} from "ionic-angular";
import {UniversitiesOverviewPage} from "../universities-overview/universities-overview";
import {MyApp} from "../../app/app.component";
import {PartnersPage} from "../partners-page/partners-page";

/*
  Generated class for the WhyStudents page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-why-students',
  templateUrl: 'why-students.html'
})
export class WhyStudentsPage {

  targets ={
    exhibitors: PartnersPage,
    universities: UniversitiesOverviewPage
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public app : App, public deepLinker: DeepLinker) {}

  ionViewDidLoad() {
    console.log(this.app.getActiveNav().getActive().name);
    console.log(this.navCtrl.getActive().name);
  }

  goUniversitiesOverview(){
    this.navCtrl.push(UniversitiesOverviewPage)
  }

}
