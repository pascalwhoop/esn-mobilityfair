import {Injectable, Pipe} from "@angular/core";
import {UiTextProvider} from "../providers/ui-text-provider";

/*
 Generated class for the TranslatePipe pipe.

 See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 Angular 2 Pipes.
 */
@Pipe({
    name: 'trans'
})
@Injectable()
export class TranslatePipe {

    texts: any;

    constructor(textProvider: UiTextProvider) {
        textProvider.texts.subscribe(
            texts => {
                this.texts = texts;
            }
        )
    }

    transform(value, args) {
        return (this.texts && this.texts[value]) ? this.texts[value] : value;
    }
}
