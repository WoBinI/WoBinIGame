
import { MapLocationPoint } from './mapLocationPoint';
import { Injectable } from '@angular/core';
import * as Linq from 'linq-es2015';
import * as Random from 'random-seed';
import * as randomSteetview from 'awesome-streetview';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class StreetViewService {

    private RandomService = Random.create();

    constructor() {
        this.RenewLocation();
        this.MapLocationPointChangedSource.subscribe(x => console.log(`Location renewed to ${x}`))
    }

    private _mapLocationPointChangedSubject: Subject<MapLocationPoint> = new Subject();
    private _mapLicationPointChangedSource: Observable<MapLocationPoint> = Observable.from(this._mapLocationPointChangedSubject);
    private _currentLocation: MapLocationPoint;

    public RenewLocation() {
        this.RandomLocation().subscribe(x => {
            this._currentLocation = x;
            this._mapLocationPointChangedSubject.next(x);
        });
    }

    public get MapLocationPointChangedSource(): Observable<MapLocationPoint> {
        return this._mapLicationPointChangedSource;
    }

    public get CurrentLocation(): MapLocationPoint {
        return this._currentLocation;
    }

    private RandomLocation(): Observable<MapLocationPoint> {
        return Observable.create((obs: Observer<MapLocationPoint>) => {
            var radomLocation = randomSteetview();
            obs.next(new MapLocationPoint(radomLocation[0], radomLocation[1]));
            obs.complete();
        });
    }

}    