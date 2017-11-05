import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MxMaskDirective } from '../../directives/mask.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MxMaskDirective],
  exports: [MxMaskDirective]
})
export class MxSharedModule { }
