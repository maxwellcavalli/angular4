import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


import {
  MatFormFieldModule, MatInputModule
} from '@angular/material';

import { MatButtonModule } from '@angular/material';
import { MatNativeDateModule, MatRippleModule } from '@angular/material';
import { PlatformModule } from '@angular/cdk/platform';
import { OverlayModule } from '@angular/cdk/overlay';
import { ObserversModule } from '@angular/cdk/observers';
import { PortalModule } from '@angular/cdk/portal';

import {
  MxClockPickerModule, MxHeaderModule, MxAccordionModule, MxCardModule, MxCrudBoxModule,
  MxDateModule, MxDialogModule, MxInputCnpjCpfModule, MxInputTelefoneModule,
  MxUploadModule, MxGalleryModule, MxDataTableModule, MxSearchBoxModule
} from '../../public_api';



import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    //FlexLayoutModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule,

    RouterModule.forRoot([{ path: "", component: AppComponent }]),

    MxHeaderModule,
    MxAccordionModule,
    MxClockPickerModule,
    MxCardModule,
    MxCrudBoxModule,
    MxDateModule,
    MxDialogModule,
    MxInputCnpjCpfModule,
    MxInputTelefoneModule,
    MxUploadModule,
    MxGalleryModule,
    MxDataTableModule,
    MxSearchBoxModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
