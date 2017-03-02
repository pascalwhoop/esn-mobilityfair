import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {IExhibitor} from "../../model/IExhibitor";
import {Http} from "@angular/http";

/*
 Generated class for the PartnerOverview page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-partner-detail',
    templateUrl: 'partner-detail.html'
})
export class PartnerDetailPage {

    partner: IExhibitor;
    snippet: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
        this.partner = navParams.get('partner');


        this.http.get(this.partner.snippetUrl)
            .subscribe(res => this.snippet = res.text());
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PartnerOverviewPage');
    }

}
