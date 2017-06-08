import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Material2AppAppComponent, DialogContent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdCheckboxModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdProgressBarModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { MdSnackBarModule } from '@angular/material';
import { MdAutocompleteModule } from '@angular/material';
import { MdDatepickerModule } from '@angular/material';
import { MdNativeDateModule } from '@angular/material';

import { DateAdapter, NativeDateAdapter, MD_DATE_FORMATS, MD_NATIVE_DATE_FORMATS } from '@angular/material';





import { MaterialModule } from '@angular/material';

import { PhotoService } from './photo.service';
import { AutocompleteComponent } from './autocomplete/autocomplete.component'

@NgModule({
  declarations: [
    Material2AppAppComponent,
    DialogContent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,

    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdCheckboxModule,
    MdInputModule,
    MdDialogModule,
    MdSnackBarModule,
    MdAutocompleteModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  entryComponents: [DialogContent],
  //providers: [PhotoService],
  providers: [
    { provide: PhotoService, useClass: PhotoService },
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MD_DATE_FORMATS, useValue: MD_NATIVE_DATE_FORMATS }
  ],

  bootstrap: [Material2AppAppComponent]
})
export class AppModule { }
