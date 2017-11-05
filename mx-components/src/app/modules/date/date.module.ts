import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';

import { MxDateComponent } from './date.component';
import { MxSharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatIconModule,
    MxSharedModule
  ],
  declarations: [MxDateComponent],
  exports: [MxDateComponent]
})
export class MxDateModule { }
