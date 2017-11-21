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
import { MatNativeDateModule, MatRippleModule, MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE } from '@angular/material';
import { PlatformModule } from '@angular/cdk/platform';
import { OverlayModule } from '@angular/cdk/overlay';
import { ObserversModule } from '@angular/cdk/observers';
import { PortalModule } from '@angular/cdk/portal';

import {
  MxClockPickerModule, MxHeaderModule, MxAccordionModule, MxCardModule, MxCrudBoxModule,
  MxDateModule, MxDialogModule, MxInputCnpjCpfModule, MxInputTelefoneModule,
  MxUploadModule, MxGalleryModule, MxDataTableModule, MxSearchBoxModule,
  MxTreeViewModule, MxRatingModule
} from '../../public_api';



import { RouterModule } from '@angular/router';
import { CUSTOM_DATE_FORMATS, CustomDateAdapter } from './modules/date/custom-date-adapter';

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

    MxHeaderModule, MxAccordionModule, MxClockPickerModule, MxCardModule,
    MxCrudBoxModule, MxDateModule, MxDialogModule, MxInputCnpjCpfModule,
    MxInputTelefoneModule, MxUploadModule, MxGalleryModule, MxDataTableModule,
    MxSearchBoxModule, MxTreeViewModule, MxRatingModule
  ],
  providers: [
    //{ provide: MAT_DATE_FORMATS, useValue: MOMENT_DATE_FORMATS },
    //{ provide: DateAdapter, useClass: MomentDateAdapter }
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: DateAdapter, useClass: CustomDateAdapter },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
