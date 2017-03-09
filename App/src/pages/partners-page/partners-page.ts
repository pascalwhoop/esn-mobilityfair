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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log(this.navCtrl.getActive().name);
  }

  partners : IExhibitor[] = [
    {
      name: "The Deutsche Börse Group",
      snippetUrl: "assets/snippets/deutscheboerse.html",
      tagline: "stepping up to the global challenge",
      city: "Frankfurt",
      url: "http://deutsche-boerse.com/dbg-en/career",
      imageUrl: "assets/img/deutscheboerse.jpg"
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
      name: "ESN Card",
      snippetUrl: "assets/snippets/esncard.html",
      tagline: "",
      city: "Brussels",
      url: "https://esncard.org/",
      imageUrl: "assets/img/ESNcard.png"
    },
    {
      name: "Social Erasmus",
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
    }
  ];

  goPartner(partner: IExhibitor){
    this.navCtrl.push(PartnerDetailPage, {partner: partner})
  }

}
