import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';
import { BrowserXhr, HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material'

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgProgressModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: BrowserXhr, useClass: NgProgressBrowserXhr }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
