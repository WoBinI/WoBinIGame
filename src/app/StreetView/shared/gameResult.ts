import * as compareDistance from 'compare-lat-lon';

import { MapLocationPoint } from './mapLocationPoint';

export class GameResult {
    constructor(private _givenLocation: MapLocationPoint, private _selectedLocation: MapLocationPoint) {
        let maxDistance = 20039; //max possible distance between two points on earth in km
        this._points = maxDistance - compareDistance(_givenLocation.lat, _givenLocation.lng,
            _selectedLocation.lat, _selectedLocation.lng); //get the distance betweend the two points in km
    }

    private _points: number;

    public get givenLocation(): MapLocationPoint {
        return this._givenLocation;
    }

    public get selectedLocation(): MapLocationPoint {
        return this._selectedLocation;
    }

    public get points(): number {
        return this._points;
    }


}