import { MapsLocationPoint } from './shared/mapsLocationPoint';
import { StreetViewService } from './shared/streetView.service';

import { MapsAPILoader } from 'angular2-google-maps/core/services/maps-api-loader/maps-api-loader';
import * as mapTypes from 'angular2-google-maps/core/services/google-maps-types';
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
var maps_api_loader_1 = require('angular2-google-maps/core/services/maps-api-loader/maps-api-loader');


declare var google: any;

@Component({
	// providers: 
	outputs: ['create'],
	selector: 'street-view',
	templateUrl: 'StreetView.component.html',
	styleUrls: ["StreetView.component.less"]
})

export class StreetViewComponent implements OnInit {

	private static MAP_SELECTOR: string = '.main-map';
	private _map: Promise<mapTypes.GoogleMap>;
	private _mapResolver: (value?: mapTypes.GoogleMap) => void;

	constructor(private myElement: ElementRef, private _loader: MapsAPILoader) {
		this._map =
			new Promise<mapTypes.GoogleMap>((resolve: () => void) => { this._mapResolver = resolve; });
	}

	public ngOnInit(): void {
		var container = this.myElement.nativeElement.querySelector(StreetViewComponent.MAP_SELECTOR);
		this._loader.load().then(() => {
			var fenway = new MapsLocationPoint(42.345573,-71.098326 );
			var map = new google.maps.StreetViewPanorama(container, <mapTypes.MapOptions>{
				position: fenway,
				addressControlOptions: {
					position: google.maps.ControlPosition.BOTTOM_CENTER
				},
				linksControl: false,
				panControl: false,
				enableCloseButton: false
			});
			this._mapResolver(map);
			return;
		});
	}
}