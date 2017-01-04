import * as Linq from 'linq-es2015';
import * as randomSteetview from 'awesome-streetview';

import { GameResult } from './gameResult';
import { Injectable } from '@angular/core';
import { MapLocationPoint } from './mapLocationPoint';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StreetViewService {


    constructor() {
        this.RenewLocation();
        this.MapLocationPointChangedSource.subscribe(x => console.log(`Location renewed to ${x}`))

    }

    private _mapLocationPointChangedSubject: Subject<MapLocationPoint> = new Subject();
    private _mapLocationPointChangedSource: Observable<MapLocationPoint> = Observable.from(this._mapLocationPointChangedSubject);

    private _gameResultsSubject: Subject<GameResult> = new Subject();
    private _gameResultsSource: Observable<GameResult> = Observable.from(this._gameResultsSubject);


    private _currentLocation: MapLocationPoint;
    private _lastGameResult: GameResult;

    public get MapLocationPointChangedSource(): Observable<MapLocationPoint> {
        return this._mapLocationPointChangedSource;
    }

    public get GameResultsSource(): Observable<GameResult> {
        return this._gameResultsSource;
    }

    public get CurrentLocation(): MapLocationPoint {
        return this._currentLocation;
    }


    public get lastGameResult(): GameResult {
        return this._lastGameResult;
    }


    public RenewLocation() {
        this.RandomLocation().subscribe(x => {
            this._currentLocation = x;
            this._mapLocationPointChangedSubject.next(x);
        });
    }

    public CofirmGameWithAcceptedPosition(selectedPostition: MapLocationPoint): void {
        this._lastGameResult = new GameResult(this._currentLocation, selectedPostition);
        console.debug(`You have ${this.lastGameResult.points} points`);
        this._gameResultsSubject.next(this._lastGameResult);
        this.RenewLocation();
    }

    private RandomLocation(): Observable<MapLocationPoint> {
        return Observable.create((obs: Observer<MapLocationPoint>) => {
            var radomLocation = randomSteetview();
            obs.next(new MapLocationPoint(radomLocation[0], radomLocation[1]));
            obs.complete();
        });
    }
}    