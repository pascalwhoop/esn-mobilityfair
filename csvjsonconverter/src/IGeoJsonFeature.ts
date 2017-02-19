export interface Properties {
    scalerank: number;
    featurecla: string;
    labelrank: number;
    sovereignt: string;
    sov_a3: string;
    adm0_dif: number;
    level: number;
    type: string;
    admin: string;
    adm0_a3: string;
    geou_dif: number;
    geounit: string;
    gu_a3: string;
    su_dif: number;
    subunit: string;
    su_a3: string;
    brk_diff: number;
    name: string;
    name_long: string;
    brk_a3: string;
    brk_name: string;
    brk_group?: any;
    abbrev: string;
    postal: string;
    formal_en: string;
    formal_fr?: any;
    note_adm0?: any;
    note_brk?: any;
    name_sort: string;
    name_alt?: any;
    mapcolor7: number;
    mapcolor8: number;
    mapcolor9: number;
    mapcolor13: number;
    pop_est: number;
    gdp_md_est: number;
    pop_year: number;
    lastcensus: number;
    gdp_year: number;
    economy: string;
    income_grp: string;
    wikipedia: number;
    fips_10?: any;
    iso_a2: string;
    iso_a3: string;
    iso_n3: string;
    un_a3: string;
    wb_a2: string;
    wb_a3: string;
    woe_id: number;
    adm0_a3_is: string;
    adm0_a3_us: string;
    adm0_a3_un: number;
    adm0_a3_wb: number;
    continent: string;
    region_un: string;
    subregion: string;
    region_wb: string;
    name_len: number;
    long_len: number;
    abbrev_len: number;
    tiny: number;
    homepart: number;
}

export interface Geometry {
    type: string;
    coordinates: number[][][];
}

export interface IGeoJsonFeature {
    type: string;
    properties: Properties;
    geometry: Geometry;
}

export interface IGeoJsonPack{
    type: string;
    features: IGeoJsonFeature[];
}