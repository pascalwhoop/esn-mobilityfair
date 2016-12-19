import {IExhibitor} from "./Exhibitor";
export interface ISection extends IExhibitor{
    country: string;
}

export class Section implements ISection{
    country: string;
    address: string;
    city: string;
    _id: string;
    url: string;
    name: string;


    constructor(country: string, address: string, city: string, id: string, url: string, name: string) {
        this.country = country;
        this.address = address;
        this.city = city;
        this._id = id;
        this.url = url;
        this.name = name;
    }
}