import * as mapTypes from 'angular2-google-maps/core/services/google-maps-types';

import { Component, OnInit } from '@angular/core';

import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ElementRef } from '@angular/core';
import { MapLocationPoint } from './shared/mapLocationPoint';
import { MapsAPILoader } from 'angular2-google-maps/core/services/maps-api-loader/maps-api-loader';
import { Observable } from 'rxjs/Observable';
import { StreetViewService } from './shared/streetView.service';

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

	constructor(private myElement: ElementRef, private _loader: MapsAPILoader,
		private streetViewService: StreetViewService) {
		this._map =
			new Promise<mapTypes.GoogleMap>((resolve: () => void) => { this._mapResolver = resolve; });
	}

	public ngOnInit(): void {
		this.streetViewService.MapLocationPointChangedSource.subscribe(x => this.replaceStreetViewMap(x));
		this.replaceStreetViewMap(this.streetViewService.CurrentLocation);
	}


	private replaceStreetViewMap(newPosition: MapLocationPoint) {
		var container = this.myElement.nativeElement.querySelector(StreetViewComponent.MAP_SELECTOR);
		this._loader.load().then(() => {
			var map = new google.maps.StreetViewPanorama(container, <mapTypes.MapOptions>{
				position: newPosition,
				addressControlOptions: {
					position: google.maps.ControlPosition.BOTTOM_CENTER
				},
				linksControl: false,
				panControl: false,
				enableCloseButton: false
			});
			this._mapResolver(map);
			return;

		}).catch((m) => {
			console.error('Unable to load StreetView');
		});
	}
}