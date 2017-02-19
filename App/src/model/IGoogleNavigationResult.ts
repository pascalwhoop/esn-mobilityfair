interface GeocodedWaypoint {
    geocoder_status: string;
    place_id: string;
    types: string[];
}

interface Coordinates {
    lat: number;
    lng: number;
}



interface Bounds {
    northeast: Coordinates;
    southwest: Coordinates;
}

interface Distance {
    text: string;
    value: number;
}

interface Duration {
    text: string;
    value: number;
}





interface Polyline {
    points: string;
}



interface Step {
    distance: Distance;
    duration: Duration;
    end_location: Coordinates;
    html_instructions: string;
    polyline: Polyline;
    start_location: Coordinates;
    travel_mode: string;
    maneuver: string;
}

interface Leg {
    distance: Distance;
    duration: Duration;
    end_address: string;
    end_location: Coordinates;
    start_address: string;
    start_location: Coordinates;
    steps: Step[];
    traffic_speed_entry: any[];
    via_waypoint: any[];
}

interface OverviewPolyline {
    points: string;
}

interface Route {
    bounds: Bounds;
    copyrights: string;
    legs: Leg[];
    overview_polyline: OverviewPolyline;
    summary: string;
    warnings: any[];
    waypoint_order: any[];
}

export interface IGoogleNavigationResult {
    geocoded_waypoints: GeocodedWaypoint[];
    routes: Route[];
    status: string;
}


