import { StreetViewComponent } from './StreetView/StreetView.component';

import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {HomeComponent} from './home/home.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [AppComponent, StreetViewComponent, HomeComponent],
  imports     : [BrowserModule, FormsModule, HttpModule,
   RouterModule.forRoot(rootRouterConfig), AgmCoreModule.forRoot({
      apiKey: '511a94b8-8bdf-447b-9959-42783ddbd02d'
    })],
  providers   : [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
