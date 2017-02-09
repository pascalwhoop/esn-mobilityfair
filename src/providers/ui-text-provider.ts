import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable, Subscriber, Subject, BehaviorSubject} from "rxjs";

/*
 Generated class for the UiTextProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */

class LanguageCodes {
    static EN = "EN";
    static DE = "DE";
    //static ES = "ES";
}


/**
 * a service providing us with texts for the User interface.
 * It contains multiple languages and the language can be changed using the common shortcuts (en, de, it, fr, ...)
 */
@Injectable()
export class UiTextProvider {

    private cachedPacks = {};
    public _texts: BehaviorSubject<any>;

    private _language: string;

    constructor(private http: Http) {
        this._texts = new BehaviorSubject({});
        this.changeLanguage(this.determineLanguageFromUserAgent());
        this._texts.subscribe(next =>{
            console.log(next);
        })



    }

    public determineLanguageFromUserAgent(): string {
        let lang = navigator.language.slice(0, 1);
        lang = lang.toUpperCase();
        switch (lang) {
            case 'EN':
                return lang;
            case 'DE':
                return lang;
            default:
                return 'EN';
        }
    }

    get language() {
        return this._language;
    }

    get texts() {
        return this._texts;
    }

    /**
     * pass a language code to change the language.
     * @param languageCode
     * @returns an observable notifying you when the language has been loaded
     */
    changeLanguage(languageCode: string): Observable <any> {
        this._language = languageCode;
        //if cached, use cached version
        if (this.cachedPacks.hasOwnProperty(languageCode)) {
            this.texts.next(this.cachedPacks[languageCode]);
            return this.texts;
        }
        //fetch from server and use new version
        else {
            let obs = this.http.get("assets/text/" + languageCode + ".json");
            obs
                .map(response => response.json())
                .subscribe(value => {
                    this.cachedPacks[languageCode] = value;
                    this.texts.next(value);
                });
            return this.texts;
        }
    }


}



