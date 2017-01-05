import { Component, OnInit } from '@angular/core';

import { GameResult } from './../StreetView/shared/gameResult';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'game-result-info',
    templateUrl: 'gameResultInfo.component.html'
})
export class GameResultInfo implements OnInit {

    public gameResult : GameResult;

    constructor(public dialogRef : MdDialogRef<GameResultInfo>) { }

    ngOnInit() { }
}