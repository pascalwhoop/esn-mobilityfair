import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

/*
  Generated class for the Program page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-program',
  templateUrl: 'program.html'
})
export class ProgramPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramPage');
  }

}
