import 'hammerjs';
import './rx-addons';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import {FlexLayoutModule} from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { HttpModule } from "@angular/http";
import { LocationChooser } from './locationChooser/locationChooser.component';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core'
import { RouterModule } from "@angular/router";
import { StreetViewComponent } from './StreetView/StreetView.component';
import { StreetViewService } from './StreetView/shared/streetView.service';
import { rootRouterConfig } from "./app.routes";

@NgModule({
  declarations: [AppComponent, StreetViewComponent, HomeComponent, LocationChooser],
  imports: [BrowserModule, FormsModule, HttpModule,   FlexLayoutModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig), AgmCoreModule.forRoot({
      apiKey: 'AIzaSyClomCuWY6L5pul5w6xnHrIUbOGBzRbnEU'
    }), MaterialModule.forRoot()
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, StreetViewService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
