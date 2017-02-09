import {Injectable, Pipe} from "@angular/core";

/*
 Generated class for the LangExpandPipe pipe.

 See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 Angular 2 Pipes.
 */
@Pipe({
    name: 'langExpand'
})
@Injectable()
export class LangExpandPipe {
    /*
     Takes a country code and returns the long version of it
     */
    transform(value) {
        if(!value) return;
        return languageMap[value.toLowerCase()];
    }
}

export var languageMap = {
    "ab": "Abkhazian",
    "af": "Afrikaans",
    "an": "Aragonese",
    "ar": "Arabic",
    "as": "Assamese",
    "az": "Azerbaijani",
    "be": "Belarusian",
    "bg": "Bulgarian",
    "bn": "Bengali",
    "bo": "Tibetan",
    "br": "Breton",
    "bs": "Bosnian",
    "ca": "Catalan / Valencian",
    "ce": "Chechen",
    "co": "Corsican",
    "cs": "Czech",
    "cu": "Church Slavic",
    "cy": "Welsh",
    "da": "Danish",
    "de": "German",
    "el": "Greek",
    "en": "English",
    "eo": "Esperanto",
    "es": "Spanish / Castilian",
    "et": "Estonian",
    "eu": "Basque",
    "fa": "Persian",
    "fi": "Finnish",
    "fj": "Fijian",
    "fo": "Faroese",
    "fr": "French",
    "fy": "Western Frisian",
    "ga": "Irish",
    "gd": "Gaelic / Scottish Gaelic",
    "gl": "Galician",
    "gv": "Manx",
    "he": "Hebrew",
    "hi": "Hindi",
    "hr": "Croatian",
    "ht": "Haitian; Haitian Creole",
    "hu": "Hungarian",
    "hy": "Armenian",
    "id": "Indonesian",
    "is": "Icelandic",
    "it": "Italian",
    "ja": "Japanese",
    "jv": "Javanese",
    "ka": "Georgian",
    "kg": "Kongo",
    "ko": "Korean",
    "ku": "Kurdish",
    "kw": "Cornish",
    "ky": "Kirghiz",
    "la": "Latin",
    "lb": "Luxembourgish; Letzeburgesch",
    "li": "Limburgan; Limburger; Limburgish",
    "ln": "Lingala",
    "lt": "Lithuanian",
    "lv": "Latvian",
    "mg": "Malagasy",
    "mk": "Macedonian",
    "mn": "Mongolian",
    "mo": "Moldavian",
    "ms": "Malay",
    "mt": "Maltese",
    "my": "Burmese",
    "nb": "Norwegian (Bokmål)",
    "ne": "Nepali",
    "nl": "Dutch",
    "nn": "Norwegian (Nynorsk)",
    "no": "Norwegian",
    "oc": "Occitan (post 1500) Provençal",
    "pl": "Polish",
    "pt": "Portuguese",
    "rm": "Raeto-Romance",
    "ro": "Romanian",
    "ru": "Russian",
    "sc": "Sardinian",
    "se": "Northern Sami",
    "sk": "Slovak",
    "sl": "Slovenian",
    "so": "Somali",
    "sq": "Albanian",
    "sr": "Serbian",
    "sv": "Swedish",
    "sw": "Swahili",
    "tk": "Turkmen",
    "tr": "Turkish",
    "ty": "Tahitian",
    "uk": "Ukrainian",
    "ur": "Urdu",
    "uz": "Uzbek",
    "vi": "Vietnamese",
    "vo": "Volapük",
    "yi": "Yiddish",
    "zh": "Chinese"
};
