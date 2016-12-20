import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Http} from "@angular/http";
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

    filteredExhibitors: Array<IExhibitor>;
    _allExhibitors: Array<IExhibitor>;

    filtering = false;
    typeFilter = 'all';
    pageSize = 30;


    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
        http.get('assets/testdata/sections.json')
            .share()
            .map(response => response.json() as IExhibitor[])
            .subscribe(exhibitors => {
                //sort items by description property

                this._allExhibitors = exhibitors.sort((a, b)=> {
                    return (a.name < b.name ? -1 : (a.name > b.name ? 1 : 0));
                });


                this.filteredExhibitors = this._allExhibitors.slice(0, this.pageSize);
            });
    }

    isFiltered(exhibitor: IExhibitor){
        return this.typeFilter == 'all' || exhibitor._id && this.typeFilter == 'esn' || !exhibitor._id && this.typeFilter == 'partners'
    }

    filterItems(ev: any) {
        // set val to the value of the searchbar
        let query = ev.target.value;
        this.filtering = query && query.length != 0; // flip filtering, needed for infinite scroll
        this.filteredExhibitors = this.getFilteredItems(query);
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
            return this._allExhibitors.slice(0, this.pageSize);
        }
    }

    doInfinite(infiniteScroll) {


        var alreadyVis = this.filteredExhibitors.length;
        //only if we haven't reached the bottom yet.
        if(alreadyVis != this._allExhibitors.length) {
            this.filteredExhibitors = this.filteredExhibitors.concat(this._allExhibitors.slice(alreadyVis, alreadyVis + this.pageSize));
        }
        console.log('executed infinite scroll');
        infiniteScroll.complete();

    }

}
