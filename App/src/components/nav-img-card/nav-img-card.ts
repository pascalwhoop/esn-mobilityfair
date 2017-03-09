import {Component, Input} from "@angular/core";
import {NavController} from "ionic-angular";

/*
  Generated class for the NavImgCard component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'nav-img-card',
  templateUrl: 'nav-img-card.html'
})
export class NavImgCardComponent {

  @Input()
  imgUrl: string;
  @Input()
  cardText: string;
  @Input()
  color: string;

  constructor(public navCtrl: NavController) {
  }
}
