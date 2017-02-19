import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {IExhibitor} from "../../model/Exhibitor";
import {CustomLogoList} from "../../providers/custom-logo-list";

/*
  Generated class for the ExhibitorModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-exhibitor-modal',
  templateUrl: 'exhibitor-modal.html'
})
export class ExhibitorModalPage {

  exhibitor: IExhibitor;

  constructor(public cll: CustomLogoList, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.exhibitor = navParams.get('exhibitor');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  hasCustomLogo(id) {
    return this.cll.hasCustomLogo(id);
  }



}
