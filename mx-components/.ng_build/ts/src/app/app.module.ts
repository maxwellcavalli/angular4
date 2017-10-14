import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header/header.module';
import { AccordionModule } from './modules/accordion/accordion.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
