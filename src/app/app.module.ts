import {MainMapComponent} from './MainMap/mainMap.component';
import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";
import {GithubService} from "./github/shared/github.service";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {RepoBrowserComponent} from './github/repo-browser/repo-browser.component';
import {RepoListComponent} from './github/repo-list/repo-list.component';
import {RepoDetailComponent} from './github/repo-detail/repo-detail.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [AppComponent, AboutComponent, RepoBrowserComponent, RepoListComponent, RepoDetailComponent, 
  HomeComponent, MainMapComponent],
  imports     : [BrowserModule, FormsModule, HttpModule,
   RouterModule.forRoot(rootRouterConfig), AgmCoreModule.forRoot({
      apiKey: 'AIzaSyClomCuWY6L5pul5w6xnHrIUbOGBzRbnEU'
    })],
  providers   : [GithubService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
