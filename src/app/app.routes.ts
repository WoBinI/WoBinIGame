import { StreetViewComponent } from './StreetView/StreetView.component';
import { HomeComponent } from './home/home.component';
import {Routes} from '@angular/router';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'map', component: StreetViewComponent}
];

 