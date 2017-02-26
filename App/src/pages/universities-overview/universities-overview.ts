import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {IExhibitor} from "../../model/IExhibitor";
import {Http} from "@angular/http";

/*
 Generated class for the UniversitiesOverview page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-universities-overview',
    templateUrl: 'universities-overview.html'
})
export class UniversitiesOverviewPage {

    sections: Array<IExhibitor>;
    sectionsPerCountry: Map<string, IExhibitor[]>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
        this.fetchSections()
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad UniversitiesOverviewPage');
    }

    private fetchSections() {
        this.http.get('assets/data/sections.json')
            .share()
            .map(response => response.json() as IExhibitor[])
            .subscribe(sections => {
                this.sections = sections;
                this.getSectionsPerCountry(sections);
            });
    }

    getSectionsPerCountry(sec?: IExhibitor[]) {
        sec = sec ? sec : this.sections;
        this.sectionsPerCountry = new Map();

        for (let section of sec) {
            let cm = this.sectionsPerCountry;
            let cc = section.country;
            if (!cm[cc]) {
                cm[cc] = [];
            }
            cm[cc].push(section);
        }

    }

    countries = {
        AT: 'Austria',
        AZ: 'Azerbaijan',
        BE: 'Belgium',
        BA: 'Bosnia and Herzegovina',
        BG: 'Bulgaria',
        HR: 'Croatia',
        CY: 'Cyprus',
        CZ: 'Czech Republic',
        DK: 'Denmark',
        EE: 'Estonia',
        FI: 'Finland',
        FR: 'France',
        GE: 'Georgia',
        DE: 'Germany',
        GR: 'Greece',
        HU: 'Hungary',
        IS: 'Iceland',
        IE: 'Ireland',
        IT: 'Italy',
        LV: 'Latvia',
        LI: 'Liechtenstein',
        LT: 'Lithuania',
        LU: 'Luxembourg',
        MK: 'Macedonia',
        MT: 'Malta',
        NL: 'The Netherlands',
        NO: 'Norway',
        PL: 'Poland',
        BY: 'Belarus',
        PT: 'Portugal',
        RO: 'Romania',
        RU: 'Russia',
        RS: 'Serbia',
        SK: 'Slovakia',
        SI: 'Slovenia',
        ES: 'Spain',
        SE: 'Sweden',
        CH: 'Switzerland',
        TR: 'Turkey',
        GB: 'UK'
    };

}
