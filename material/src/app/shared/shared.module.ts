import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Routes, RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'

import { MatSidenavModule, MatButtonModule, MatIconModule } from '@angular/material'

import { MxAccordionModule } from 'mx-components'

import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,

    FlexLayoutModule,
    MatSidenavModule, MatButtonModule, MatIconModule,

    MxAccordionModule
  ],

  exports: [

    FlexLayoutModule,
    MatSidenavModule, MatButtonModule, MatIconModule,

    MxAccordionModule
  ],
  declarations: []
})
export class SharedModule { }
