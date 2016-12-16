import {Component} from '@angular/core';

@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent {

  constructor() {
    this.name = "MAthiasss";
    this.points = 20;
  }
  
  name : string;

  points : number;

  public add()  : void {
    this.points = this.points + 1;
  }

}


