
import { MapLocationPoint } from './mapLocationPoint';
import { Injectable } from '@angular/core';
import * as Linq from 'linq-es2015';
import * as Random from 'random-seed';
import * as randomSteetview from 'awesome-streetview';

@Injectable()
export class StreetViewService {

    private RandomService = Random.create();

    constructor() {
    }

    public RandomLocation(): MapLocationPoint {
         var radomLocation =  randomSteetview();
         return new MapLocationPoint(radomLocation[0], radomLocation[1]);
    }

}    