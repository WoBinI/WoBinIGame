import { StreetViewService } from './StreetView/shared/streetView.service';
import { HomeComponent } from "./home/home.component";
import { StreetViewComponent } from './StreetView/StreetView.component';

import { NgModule } from '@angular/core'
import { RouterModule } from "@angular/router";
import { rootRouterConfig } from "./app.routes";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MaterialModule } from '@angular/material';

import 'hammerjs';
import './rx-addons';

@NgModule({
  declarations: [AppComponent, StreetViewComponent, HomeComponent],
  imports: [BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot(rootRouterConfig), AgmCoreModule.forRoot({
      apiKey: 'AIzaSyClomCuWY6L5pul5w6xnHrIUbOGBzRbnEU'
    }), MaterialModule.forRoot()
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, StreetViewService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
