import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {UniversitiesOverviewPage} from "../universities-overview/universities-overview";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WhyStudentsPage');
  }

  goUniversitiesOverview(){
    this.navCtrl.push(UniversitiesOverviewPage)
  }

}
