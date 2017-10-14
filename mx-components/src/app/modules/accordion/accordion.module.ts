import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionClickDirective } from '../../directives/accordion-click.directive';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AccordionComponent, AccordionClickDirective, AccordionItemComponent],
  exports: [AccordionComponent, AccordionClickDirective]
})
export class AccordionModule { }
