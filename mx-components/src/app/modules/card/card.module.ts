import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MxCardComponent } from './card.component';
import { MatCardModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [MxCardComponent],
  exports: [MxCardComponent]
})
export class MxCardModule { }
