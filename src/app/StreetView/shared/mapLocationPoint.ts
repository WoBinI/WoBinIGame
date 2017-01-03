
export class MapLocationPoint {
    constructor(private _lat: number, private _lng: number) {

    }

    public get lat(): number {
        return this._lat;
    }

    public get lng(): number {
        return this._lng;
    }

    public toString() : String {
        return `[${this.lat}/${this.lng}]`;
    }
}