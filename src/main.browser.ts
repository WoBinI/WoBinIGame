import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
require('@angular/material/core/theming/prebuilt/indigo-pink.css');


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
 