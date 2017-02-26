import * as fs from "fs";
import {ICountry} from "./ICountry";
import {IGeoJsonPack} from "./IGeoJsonFeature";
import * as _ from 'underscore';

let countries: ICountry[] = JSON.parse(fs.readFileSync('../App/src/assets/data/countries.json', 'UTF-8'));
let geojson: IGeoJsonPack = JSON.parse(fs.readFileSync('../App/src/assets/data/custom.geo_med.json', 'UTF-8'));

let countryIndex = _.indexBy(countries, '_id');


let keep =geojson.features.filter(feature => {
    return !! countryIndex[feature.properties.iso_a2];
});
geojson.features = keep;
console.log('done');
fs.writeFileSync('./data_out/esneurope_geojson.json', JSON.stringify(geojson), {encoding: 'UTF-8'});




