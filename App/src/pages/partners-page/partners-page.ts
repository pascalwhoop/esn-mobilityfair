import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {IExhibitor} from "../../model/IExhibitor";
import {PartnersOverviewPage} from "../partners-overview/partners-overview";

/*
  Generated class for the PartnersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'partners-page',
  templateUrl: 'partners-page.html'
})
export class PartnersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartnersPagePage');
  }

  partners : IExhibitor[] = [
    {
      name: "The Deutsche Börse Group",
      snippetUrl: "assets/snippets/deutscheboerse.html",
      tagline: "stepping up to the global challenge",
      city: "Frankfurt",
      url: "http://deutsche-boerse.com/dbg-en/career",
      imageUrl: "assets/img/deutscheboerse.jpg"
    }
  ];

  goPartner(partner: IExhibitor){
    this.navCtrl.push(PartnersOverviewPage, {partner: partner})
  }

}
