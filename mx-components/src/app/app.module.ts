import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ClockPickerModule, HeaderModule, AccordionModule } from '../../public_api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AccordionModule,
    ClockPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
