import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {IExhibitor} from "../../model/IExhibitor";
import {CustomLogoList} from "../../providers/custom-logo-list";

/*
 Generated class for the UniversityDetail page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-university-detail',
    templateUrl: 'university-detail.html'
})
export class UniversityDetailPage {

    section: IExhibitor;

    constructor(public navCtrl: NavController, public navParams: NavParams, public cll: CustomLogoList) {
        this.section = this.navParams.get('section');
    }

    hasCustomLogo(id) {
        return this.cll.hasCustomLogo(id);
    }

    buildUniWebsiteUrl(section: IExhibitor) {
        let base = 'http://www.google.com/search?btnI=I%27m+Feeling+Lucky&ie=UTF-8&oe=UTF-8&q=';
        let encodedUni = encodeURIComponent(section.university + ' university');
        return base+encodedUni;
    }

    buildSectionUrl(section: IExhibitor){
        let hasProtocol = (section.url.indexOf('http://') != -1);
        if(!hasProtocol)   section.url = 'http://' + section.url;
        return section.url;
    }

}
