import {Component} from "@angular/core";
import {Input} from "@angular/core/src/metadata/directives";
import {IExhibitor} from "../../model/Exhibitor";
import {CustomLogoList} from "../../providers/custom-logo-list";
import {ModalController} from "ionic-angular";
import {ExhibitorModalPage} from "../../pages/exhibitor-modal/exhibitor-modal";

/*
 Generated class for the ExhibitorCard component.

 See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 for more info on Angular 2 Components.
 */
@Component({
    selector: 'exhibitor-card',
    templateUrl: 'exhibitor-card.html'
})
export class ExhibitorCardComponent {

    @Input() exhibitor: IExhibitor;

    constructor(public cll: CustomLogoList, public modal: ModalController) {

    }

    hasCustomLogo(id) {
        return this.cll.hasCustomLogo(id);
    }

    showModal(exhibitor: IExhibitor) {
        let modal = this.modal.create(ExhibitorModalPage, {exhibitor: exhibitor});
        modal.present();

    }



}
