import {Component} from "@angular/core";
import {AlertController} from "ionic-angular";
import {UiTextProvider} from "../../providers/ui-text-provider";

/*
 Generated class for the LanguageSwitchButton component.

 See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 for more info on Angular 2 Components.
 */
@Component({
    selector: 'language-switch-button',
    templateUrl: 'language-switch-button.html'
})
export class LanguageSwitchButtonComponent {


    constructor(private alertCtrl: AlertController, private texts: UiTextProvider) {
    }

    getLangCode(): string{
        return this.texts.language;
    }

    getFlagUrl(){
        return "url('assets/img/flags/" + this.getLangCode() + ".svg')";
    }

    startDialog() {
        let sub = this.texts.texts.subscribe(
            texts => {
                let alert = this.configureAlert(texts);
                alert.present().then(()=> sub.unsubscribe());
            }
        );


    }

    private configureAlert(texts) {
        let alert = this.alertCtrl.create();
        alert.setTitle(texts['Choose Language']);

        alert.addInput({
            type: 'radio',
            label: texts['English'],
            value: 'EN',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: texts['German'],
            value: 'DE',
            checked: false
        });

        alert.addButton(texts['Cancel']);

        alert.addButton({
            text: 'OK',
            handler: lang => {
                this.texts.changeLanguage(lang);

            }
        });
        return alert;
    }
}
