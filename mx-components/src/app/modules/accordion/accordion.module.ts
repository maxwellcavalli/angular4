import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material';

import { MxAccordionComponent } from './accordion.component';
import { MxAccordionClickDirective } from '../../directives/accordion-click.directive';
import { MxAccordionItemComponent } from './accordion-item/accordion-item.component';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  declarations: [MxAccordionComponent, MxAccordionClickDirective, MxAccordionItemComponent],
  exports: [MxAccordionComponent, MxAccordionClickDirective]
})
export class MxAccordionModule { }
