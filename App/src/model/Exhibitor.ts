export interface IExhibitor{
    code?: string; //mostly ESN Sections
    url: string;
    name: string;
    address?: string;
    city: string;
    country?: string;
    description?: string;
    //type: string; //section or partner ... not yet in the data
}