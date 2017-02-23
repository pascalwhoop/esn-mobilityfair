export interface IExhibitor{
    code?: string; //mostly ESN Sections
    url: string;
    name: string;
    address?: string;
    city: string;
    country?: string;
    tagline?: string;
    description?: string;
    snippetUrl?: string;
    imageUrl?: string;
    //type: string; //section or partner ... not yet in the data
}