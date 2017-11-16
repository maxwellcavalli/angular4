import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { PlatformModule } from '@angular/cdk/platform';
import { OverlayModule } from '@angular/cdk/overlay';
import { ObserversModule } from '@angular/cdk/observers';
import { PortalModule } from '@angular/cdk/portal';


import { RouterModule } from '@angular/router';
import { MxNumberOnlyDirective } from './directives/only-number';
import { MxMaskDirective } from './directives/mask';
import { MxAutofocusDirective } from './directives/auto-focus';

@NgModule({
  declarations: [
    AppComponent,
    MxAutofocusDirective,
    MxMaskDirective,
    MxNumberOnlyDirective


  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([{ path: "", component: AppComponent }]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
