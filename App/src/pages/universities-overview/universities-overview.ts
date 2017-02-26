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

    countries = [{code: 'AT', name: 'Austria'},
        {code: 'AZ', name: 'Azerbaijan'},
        {code: 'BE', name: 'Belgium'},
        {code: 'BA', name: 'Bosnia and Herzegovina'},
        {code: 'BG', name: 'Bulgaria'},
        {code: 'HR', name: 'Croatia'},
        {code: 'CY', name: 'Cyprus'},
        {code: 'CZ', name: 'Czech Republic'},
        {code: 'DK', name: 'Denmark'},
        {code: 'EE', name: 'Estonia'},
        {code: 'FI', name: 'Finland'},
        {code: 'FR', name: 'France'},
        {code: 'GE', name: 'Georgia'},
        {code: 'DE', name: 'Germany'},
        {code: 'GR', name: 'Greece'},
        {code: 'HU', name: 'Hungary'},
        {code: 'IS', name: 'Iceland'},
        {code: 'IE', name: 'Ireland'},
        {code: 'IT', name: 'Italy'},
        {code: 'LV', name: 'Latvia'},
        {code: 'LI', name: 'Liechtenstein'},
        {code: 'LT', name: 'Lithuania'},
        {code: 'LU', name: 'Luxembourg'},
        {code: 'MK', name: 'Macedonia'},
        {code: 'MT', name: 'Malta'},
        {code: 'NL', name: 'The Netherlands'},
        {code: 'NO', name: 'Norway'},
        {code: 'PL', name: 'Poland'},
        {code: 'PT', name: 'Portugal'},
        {code: 'RO', name: 'Romania'},
        {code: 'RU', name: 'Russia'},
        {code: 'YU', name: 'Serbia'},
        {code: 'SK', name: 'Slovakia'},
        {code: 'SI', name: 'Slovenia'},
        {code: 'ES', name: 'Spain'},
        {code: 'SE', name: 'Sweden'},
        {code: 'CH', name: 'Switzerland'},
        {code: 'TR', name: 'Turkey'},
        {code: 'GB', name: 'UK'}
    ];

}
