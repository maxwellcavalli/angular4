import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MxHeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MxHeaderComponent],
  exports: [MxHeaderComponent]
})
export class MxHeaderModule { }
