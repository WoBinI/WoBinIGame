import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { GameResultInfo } from './../gameResultInfo/gameResultInfo.component';
import { StreetViewService } from '../StreetView/shared/streetView.service';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.less'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private streetViewService: StreetViewService, private DialogService: MdDialog) {

  }
  ngOnInit() {
    this.streetViewService.GameResultsSource.subscribe(x => {
      var dialogRef = this.DialogService.open(GameResultInfo,
        {
          disableClose: true
        }
      );
      dialogRef.componentInstance.gameResult = x;
    });
  }


  public RenewLocation(): void {
    this.streetViewService.RenewLocation();
  }

}
