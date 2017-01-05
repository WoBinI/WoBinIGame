import { Component, OnInit } from '@angular/core';

import { MapLocationPoint } from './../StreetView/shared/mapLocationPoint';
import { MouseEvent } from 'angular2-google-maps/core';
import { StreetViewService } from './../StreetView/shared/streetView.service';

@Component({
    selector: 'location-chooser',
    templateUrl: 'locationChooser.component.html'
})
export class LocationChooser implements OnInit {
    constructor(private _steetViewService: StreetViewService) { }

    ngOnInit() {
        this._steetViewService.MapLocationPointChangedSource.subscribe(() => this._selectedPosition = undefined);
    }

    private _selectedPosition: MapLocationPoint;

    public get selectedPosition(): MapLocationPoint {
        return this._selectedPosition;
    }

    public locationSelected(event: MouseEvent): void {
        var choosedPosition = new MapLocationPoint(event.coords.lat, event.coords.lng);
        console.debug(`New location selected: ${choosedPosition.toString()}`);
        this._selectedPosition = choosedPosition;
    }

    public confirmSelection(): void {
        console.debug(`Location ${this.selectedPosition} confirmed by user`);
        this._steetViewService.CofirmGameWithAcceptedPosition(this._selectedPosition);
    }
}