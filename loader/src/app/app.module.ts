import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';
import { BrowserXhr, HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgProgressModule,
    HttpModule
  ],
  providers: [
    {provide: BrowserXhr, useClass: NgProgressBrowserXhr}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
