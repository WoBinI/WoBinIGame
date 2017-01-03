import { MapsLocationPoint } from './mapsLocationPoint';

import { Injectable } from '@angular/core';
import * as Random from 'random-seed';

@Injectable()
export class StreetViewService  {

    private RandomService = Random.create();

//     constructor() {
//         var list : List = new List();
//         // this.locations = new List<MapsLocationPoint>([
//         //     new MapsLocationPoint(42.345573,-71.098326 ),
//         //     new MapsLocationPoint(42.345573,-71.098326 ),
//         //     new MapsLocationPoint(42.345573,-71.098326 ),
//         //     new MapsLocationPoint(42.345573,-71.098326 )
//         // ]);
// let d = new List<string>();
//     }

    // public RandomLocation(): MapsLocationPoint {
    //     if(!this.locations.Any){
    //         return null;
    //     }
    //     let randomNumber = this.RandomService.floatBetween(0, this.locations.Count());
    //     return this.locations.ElementAtOrDefault(randomNumber);
    // }

    // private locations: List<MapsLocationPoint>;

}    