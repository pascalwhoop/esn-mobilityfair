import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {IExhibitor} from "../../model/IExhibitor";
import {PartnerDetailPage} from "../partner-detail/partner-detail";


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

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log(this.navCtrl.getActive().name);
    }

    partners: IExhibitor[] = [
        {
            name: "The Deutsche Börse Group",
            snippetUrl: "assets/snippets/deutscheboerse.html",
            tagline: "stepping up to the global challenge",
            city: "Frankfurt",
            url: "http://deutsche-boerse.com/dbg-en/career",
            imageUrl: "assets/img/deutscheboerse.svg"
        },
        {
            name: "European Commission",
            snippetUrl: "assets/snippets/europeancommission.html",
            tagline: "",
            city: "Brussels",
            url: "http://ec.europa.eu/",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/84/European_Commission.svg"
        },
        {
            name: "Gostralia",
            snippetUrl: "assets/snippets/gostralia.html",
            tagline: "GOstralia! dein Australienexperte",
            city: "Stuttgart",
            url: "https://www.gostralia.de",
            imageUrl: "assets/img/gostralia_logo.png"
        },
        {
            name: "STA Travel",
            snippetUrl: "assets/snippets/statravel.html",
            tagline: "STA Travel – Reisen für Weltentdecker",
            city: "",
            url: "http://www.statravel.de/",
            imageUrl: "assets/img/STA-logo.gif"
        },
        {
            name: "ESNcard",
            snippetUrl: "assets/snippets/esncard.html",
            tagline: "",
            city: "Brussels",
            url: "https://esncard.org/",
            imageUrl: "assets/img/ESNcard.png"
        },
        {
            name: "SocialErasmus",
            snippetUrl: "assets/snippets/socialerasmus.html",
            tagline: "Choose a Cause and Leave your Mark",
            city: "Brussels",
            url: "https://socialerasmus.esn.org/",
            imageUrl: "assets/img/socialerasmus.png"
        },
        {
            name: "Mov'in Europe",
            snippetUrl: "assets/snippets/movineurope.html",
            tagline: "",
            city: "Brussels",
            url: "https://movineurope.esn.org/",
            imageUrl: "assets/img/MovinEurope.png"
        },
        {
            name: "Responsible Party",
            snippetUrl: "assets/snippets/responsibleparty.html",
            tagline: "",
            city: "Brussels",
            url: "https://esn.org/responsible-party",
            imageUrl: "assets/img/Responsible-Party-initials.png"
        },
        //new ones
        {
            name: "Arbeitsgruppe Wirtschaftsingenieure e.V.",
            snippetUrl: "assets/snippets/ag_win.html",
            tagline: "",
            city: "Berlin",
            url: "http://agwiing.de/",
            imageUrl: "assets/img/ag_win.png"
        },
        {
            name: "AIESEC",
            snippetUrl: "assets/snippets/aiesec.html",
            tagline: "",
            city: "Berlin",
            url: "https://aiesec.de/berlin-hu/",
            imageUrl: "assets/img/aiesec.png"
        },
        {
            name: "AEGEE",
            snippetUrl: "assets/snippets/aegee.html",
            tagline: "",
            city: "Berlin",
            url: "http://aegee.org/",
            imageUrl: "assets/img/aegee.jpg"
        },
        {
            name: "Career Service FU Berlin",
            snippetUrl: "assets/snippets/fu_berlin.html",
            tagline: "",
            city: "Berlin",
            url: "http://www.fu-berlin.de/sites/career/",
            imageUrl: "assets/img/fu_berlin.png"
        },
        {
            name: "Europa macht Schule",
            snippetUrl: "assets/snippets/ems.html",
            tagline: "",
            city: "Berlin",
            url: "https://www.europamachtschule.de/",
            imageUrl: "assets/img/ems_logo.png"
        },
        {
            name: "Techniker Krankenkasse",
            tagline: "",
            city: "Hamburg",
            url: "https://www.tk.de/",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Technikerkrankenkasse-logo.svg/2000px-Technikerkrankenkasse-logo.svg.png"

        },
        {
            name: "Dr Walter",
            tagline: "",
            city: "Neunkirchen-Seelscheid",
            url: "http://www.dr-walter.com/",
            imageUrl: "assets/img/walter.jpg"

        },
        {
            name: "InterExchange",
            tagline: "Uniting People Through International Exchange",
            city: "",
            url: "https://www.interexchange.org/",
            imageUrl: "assets/img/interexchange.png"

        },{
            name: "Hawkers",
            tagline: "",
            city: "",
            url: "https://www.hawkersco.com/",
            imageUrl: "assets/img/hawkers.jpg"

        },{
            name: "Morgan McKinley",
            tagline: "",
            city: "",
            url: "https://www.morganmckinley.com/",
            imageUrl: "assets/img/Morgan.jpg"

        },{
            name: "Accenture",
            tagline: "",
            city: "",
            url: "https://www.accenture.com/de-de/new-applied-now",
            imageUrl: "http://insuranceblog.accenture.com/wp-content/uploads/2016/02/Accenture-Logo-Big.jpg"
        },{
            name: "Hostelling International",
            snippetUrl: "assets/snippets/hostelling.html",
            tagline: "",
            city: "",
            url: "https://www.hihostels.com/de",
            imageUrl: "assets/img/hostelling.png"
        },{
            name: "uniplaces",
            snippetUrl: "assets/snippets/uniplaces.html",
            tagline: "",
            city: "",
            url: "https://www.uniplaces.com/de/",
            imageUrl: "assets/img/uniplaces.png"
        },{
            name: "A&O Hostels",
            tagline: "",
            city: "",
            url: "https://www.aohostels.com/de/",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/AO_Standard_Logo.svg/1200px-AO_Standard_Logo.svg.png"
        }
    ].sort( (a,b) =>{
        return a.name>b.name? 1 : a.name<b.name ? -1 : 0;
    });

    goPartner(partner: IExhibitor) {
        this.navCtrl.push(PartnerDetailPage, {partner: partner})
    }

}
