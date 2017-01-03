
import { MapLocationPoint } from './mapLocationPoint';
import { Injectable } from '@angular/core';
import * as Linq from 'linq-es2015';
import * as Random from 'random-seed';
import * as randomSteetview from 'awesome-streetview';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class StreetViewService {

    private RandomService = Random.create();

    constructor() {
    }

    public RandomLocation(): Observable<MapLocationPoint> {
        return Observable.create((obs: Observer<MapLocationPoint>) => {
            var radomLocation = randomSteetview();
            obs.next(new MapLocationPoint(radomLocation[0], radomLocation[1]));
            obs.complete();
        });
    }

}    