import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MxAutofocusDirective } from '../../directives/auto-focus';
import { MxMaskDirective } from '../../directives/mask';
import { MxNumberOnlyDirective } from '../../directives/only-number';
import { MxCustomPage } from '../components/data-table/mx-custom-page';
import { MxCustomSort } from '../components/data-table/mx-custom-sort';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MxAutofocusDirective,
    MxMaskDirective,
    MxNumberOnlyDirective
  ],
  exports:[
    MxAutofocusDirective,
    MxMaskDirective,
    MxNumberOnlyDirective,

    MxCustomPage,
    MxCustomSort
  ],

  
})
export class SharedModule { }
