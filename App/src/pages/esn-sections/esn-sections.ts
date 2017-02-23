import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Http} from "@angular/http";
import "rxjs/Rx";
import {IExhibitor} from "../../model/IExhibitor";


/*
 Generated class for the Exhibitors page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-esn-sections',
    templateUrl: 'esn-sections.html'
})
export class EsnSectionsPage {

    filteredExhibitors: Array<IExhibitor>;
    _allExhibitors: Array<IExhibitor>;

    filter = {
        country: '',
        search: '',
        type: 'all'
    };

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
    countrySelected: string;


    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
        this.fetchSections(http);
    }

    private fetchSections(http: Http) {
        http.get('assets/data/sections.json')
            .share()
            .map(response => response.json() as IExhibitor[])
            .subscribe(exhibitors => {
                //sort items by description property

                this._allExhibitors = exhibitors.sort((a, b) => {
                    return (a.name < b.name ? -1 : (a.name > b.name ? 1 : 0));
                });
                this.fixImages();
                this.filteredExhibitors = this._allExhibitors.slice(0);
            });
    }

    public applyFilters() {
        this.filteredExhibitors = this.filterExhibitors();
    }

    public clearFilters(){
        this.filteredExhibitors = this._allExhibitors;
        this.filter = {
            country: '',
            search: '',
            type: 'all'
        }
    }

    private filterExhibitors(): IExhibitor[] {
        let f = this.filter;
        //get a copy of the array to filter through
        let results = this._allExhibitors.slice(0);

        if (f.search && f.search.trim() != '') {
            results = results.filter((item) => {
                let itStr = JSON.stringify(item).toLowerCase();
                return (itStr.indexOf(f.search.toLowerCase()) > -1);
            });
        }
        if (f.country && f.country.trim() !='') {
            results = results.filter(item => {
                return item.country == f.country
            });
        }
        if (f.type != 'all') {
            results = results.filter(item => {
                return item.code && f.type == 'esn' || !item.code && f.type == 'partners'
            })
        }
        this.fixImages(150);
        return results;
    }

    ionViewDidLoad() {
        //fix for ion-img not loading the images otherwise
        this.fixImages();
    }

    private fixImages(time?) {
        time = time ? time : 100;
        var scroll = document.getElementsByTagName('page-esn-sections')[0].getElementsByClassName('scroll-content')[0]
        setTimeout(() => scroll.scrollTop = 2, time);
    }

}


