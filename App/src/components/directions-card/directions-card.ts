import {Component, NgZone} from "@angular/core";
import {Http} from "@angular/http";

/*
 Generated class for the DirectionsCard component.

 See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 for more info on Angular 2 Components.
 */
@Component({
    selector: 'directions-card',
    templateUrl: 'directions-card.html'
})
export class DirectionsCardComponent {

    userAddress: IFreeGeoIpResponse;
    drivingDuration: string;
    drivingDistance: string;

    constructor(private http: Http, private zone: NgZone) {
        
    }

    private initDirectionsButton() {
        this.http.get("https://freegeoip.net/json/")
            .map(res => res.json())
            .subscribe((adr: IFreeGeoIpResponse) => {
                this.userAddress = adr;
                this.getDirectionsData(adr)
            })
    }

    openAddressInMaps(address: string) {
        let encodedAddress = encodeURIComponent(address);
        window.open('https://maps.google.com/maps?q=' + encodedAddress, '_blank');
    }

    ngAfterViewInit(){
        this.initDirectionsButton()
    }

    getDirectionsData(address: IFreeGeoIpResponse) {
        document.addEventListener("maps_loaded", ()=>{
            console.log('event fired! we got maps!');
            let service = new google.maps.DirectionsService();
            service.route({
                origin: new google.maps.LatLng(address.latitude, address.longitude),
                destination: 'Henry-Ford-Bau, Garystraße 35, 14195 Berlin-Dahlem',
                travelMode: google.maps.TravelMode.DRIVING
            }, result => {
                this.zone.run(()=>{
                    this.drivingDuration = result.routes[0].legs[0].duration.text;
                    this.drivingDistance = result.routes[0].legs[0].distance.text;
                });
            })
        })
    }




}


export interface IFreeGeoIpResponse {
    ip: string;
    country_code: string;
    country_name: string;
    region_code: string;
    region_name: string;
    city: string;
    zip_code: string;
    time_zone: string;
    latitude: number;
    longitude: number;
    metro_code: number;
}
