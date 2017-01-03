import { StreetViewService } from './../StreetView/shared/streetView.service';
import {Component} from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.less'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private streetViewService : StreetViewService){

  }

  	public RenewLocation() : void {
			this.streetViewService.RenewLocation();
	}

}
