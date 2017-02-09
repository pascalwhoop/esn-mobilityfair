import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import "rxjs/Rx";
import {WhyExhibitorsPage} from "../why-exhibitors/why-exhibitors";
import {WhyStudentsPage} from "../why-students/why-students";
import {ExhibitorsPage} from "../exhibitors/exhibitors";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }



  goWhyExhibitor(){
    this.navCtrl.push(WhyExhibitorsPage)
  }

  goWhyStudent(){
    this.navCtrl.push(WhyStudentsPage)
  }

  goExhibitorsPage(){
    this.navCtrl.push(ExhibitorsPage)
  }
}
