import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";

/*
 Generated class for the CustomLogoList provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class CustomLogoList {


    constructor() {

    }

    hasCustomLogo(id: string) {
        return this.customLogoSections.indexOf(id) > 0;
    }

    customLogoSections: Array<string> = [
        "AT-GRAZ-UNI",
        "AT-INNS-ESN",
        "AT-LINZ-ESN",
        "AT-WIEN-UAS",
        "BE-LLNE-ESN",
        "BG-UNW-ESN",
        "CH-GENE-UNI",
        "CH-LAUS-XEP",
        "CZ-BRNO-ISC",
        "CZ-LIBE-ESN",
        "CZ-MZLU-ESN",
        "DE-AUGS-ESN",
        "DE-BAYR-ESN",
        "DE-BRAU-ISN",
        "DE-DRES-HTW",
        "DE-DRES-TUN",
        "DE-FRMA-UNI",
        "DE-JENA-ESN",
        "DE-MUNI-MES",
        "DK-COPE-ESN",
        "EE-TALL-TUT",
        "ES-BARC-ESN",
        "ES-BARC-POM",
        "ES-BARC-UAB",
        "ES-BARC-UPC",
        "ES-BILB-ESN",
        "ES-CADI-ESN",
        "ES-CAST-ESN",
        "ES-MADR-CA3",
        "ES-MADR-RJC",
        "ES-MADR-UAM",
        "ES-SALA-ESN",
        "ES-SEVI-ESN",
        "ES-UCLM-ESN",
        "ES-VALE-ESN",
        "ES-VALE-UPV",
        "ES-VALL-ESN",
        "FI-HELS-MET",
        "FI-JOEN-JYY",
        "FR-BELF-ESN",
        "FR-CLER-WOR",
        "FR-DIJO-ESN",
        "FR-NICE-ESN",
        "FR-PARI-ASS",
        "FR-STRA-ESN",
        "GB-ABER-ESN",
        "GB-EDIN-HER",
        "GB-KING-ESN",
        "GB-LOND-WES",
        "GB-PLYM-ESN",
        "GB-PRES-ESN",
        "GB-SOUT-ESN",
        "GR-ATHE-ESN",
        "GR-ATHE-KAP",
        "GR-ATHE-PIR",
        "GR-ATHE-TEI",
        "GR-CHAN-ESN",
        "GR-IOAN-ESN",
        "GR-KOMO-ESN",
        "GR-LAMI-ESN",
        "GR-LARI-ESN",
        "GR-NTUA-ESN",
        "GR-PATR-ESN",
        "GR-PIRA-ESN",
        "GR-THES-AUT",
        "GR-THES-ESN",
        "GR-THES-TEI",
        "HU-BUPE-COR",
        "HU-BUPE-ELT",
        "HU-BUPE-IBS",
        "HU-BUPE-OBU",
        "HU-DEBR-ESN",
        "HU-GYOR-ESN",
        "HU-MISK-ESN",
        "HU-PECS-ESN",
        "IT-ANCO-ESA",
        "IT-AQUI-ESN",
        "IT-BERG-ESN",
        "IT-BOLO-ESN",
        "IT-BRES-ESN",
        "IT-CATA-ASE",
        "IT-FLOR-ESN",
        "IT-MESS-ESN",
        "IT-MILA-BIC",
        "IT-MILA-IUL",
        "IT-MILA-STA",
        "IT-NOVA-ESN",
        "IT-PAVI-ESN",
        "IT-PERU-PEP",
        "IT-POTE-ESN",
        "IT-RECA-ESN",
        "IT-ROMA-LUI",
        "IT-ROMA-TRE",
        "IT-SALE-ESN",
        "IT-TRIE-ESN",
        "IT-VERO-ESN",
        "LT-KAUN-ESN",
        "LT-VILN-MRU",
        "LT-VILN-VDK",
        "LV-RIGA-ESN",
        "NL-AMST-ISN",
        "NL-AMST-VUN",
        "NO-BERG-ESN",
        "NO-KGAR-AGD",
        "NO-OSLO-UNI",
        "PL-BIAL-ESN",
        "PL-BIAL-UWB",
        "PL-CZES-ESN",
        "PL-GDAN-POL",
        "PL-GDAN-UNG",
        "PL-GLIW-SUT",
        "PL-KRAK-ACE",
        "PL-KRAK-AGH",
        "PL-LUBL-LUT",
        "PL-OLSZ-UWM",
        "PL-POZN-ESN",
        "PL-SZCZ-ESN",
        "PL-WARS-SGG",
        "PL-WROC-PWR",
        "PT-AVEI-ESN",
        "PT-COIM-ASE",
        "PT-FARO-UAL",
        "PT-LEIR-ESN",
        "PT-LISB-ESN",
        "PT-MINH-UOM",
        "RO-ALBA-ESN",
        "RO-BUCH-UNI",
        "RU-MOSC-ESN",
        "SE-VAXJ-ESN",
        "SK-NTRA-ESN",
        "SK-TRNA-ESN",
        "TR-ADAN-ESN",
        "TR-ANKA-ESN",
        "TR-ESKI-ESN",
        "TR-ISTA-BAH",
        "TR-ISTA-ISK",
        "TR-ISTA-MAR",
        "TR-IZMI-EGE",
        "TR-MANI-ESN",
        "TR-MERS-ESN",
        "TR-YEDI-ESN",
        "YU-BELG-UPG"
    ]

}
