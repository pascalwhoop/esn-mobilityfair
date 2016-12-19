import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/Rx";
import {IExhibitor} from "../../model/Exhibitor";

/*
 Generated class for the Exhibitors page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-exhibitors',
    templateUrl: 'exhibitors.html'
})
export class ExhibitorsPage {

    exhibitors: IExhibitor[];
    _allExhibitors: IExhibitor[];


    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
        http.get('/assets/testdata/sections.json')
            .share()
            .map(response => response.json() as IExhibitor[])
            .subscribe(exhibitors => {
                //sort items by description property

                this._allExhibitors= exhibitors.sort((a, b)=> {
                    return (a.name < b.name ? -1 : (a.name > b.name ? 1 : 0));
                });

                this.exhibitors = this.getFilteredItems();
            });
    }


    filterItems(ev: any) {
        // set val to the value of the searchbar
        let query = ev.target.value;
        this.exhibitors = this.getFilteredItems(query);
    }

    private getFilteredItems(query?: string) {
        // if the value is an empty string don't filter the items
        if (query && query.trim() != '') {
            return this._allExhibitors.filter((item) => {
                let itStr = JSON.stringify(item).toLowerCase();
                return (itStr.indexOf(query.toLowerCase()) > -1);
            });
        }
        //but just return a copy of the array
        else {
            return this._allExhibitors.slice();
        }
    }

}
