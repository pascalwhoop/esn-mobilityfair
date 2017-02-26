import {Component} from "@angular/core";
import {NavParams, ViewController, NavController} from "ionic-angular";
import {IExhibitor} from "../../model/IExhibitor";
import {CustomLogoList} from "../../providers/custom-logo-list";
import {UniversityDetailPage} from "../university-detail/university-detail";

/*
 Generated class for the CountryModal page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-country-modal',
    templateUrl: 'country-modal.html'
})
export class CountryModalPage {

    countryName: string;
    country: IExhibitor[];

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, navParams: NavParams, public cll: CustomLogoList) {
        this.countryName = navParams.get('countryName');
        this.country = navParams.get('country');
    }

    hasCustomLogo(id) {
        return this.cll.hasCustomLogo(id);
    }

    goUniversity(section: IExhibitor) {
        this.viewCtrl.dismiss({section: section});
    }


    closeModal() {
        this.viewCtrl.dismiss();
    }


}
