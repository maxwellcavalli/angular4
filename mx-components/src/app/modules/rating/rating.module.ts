import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MxRatingComponent } from './rating.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [MxRatingComponent],
  exports: [MxRatingComponent]
})
export class MxRatingModule { }
