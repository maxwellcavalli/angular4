import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MxTreeViewComponent } from './tree-view.component';
import { MxCheckBoxDirective } from '../../directives/check-box.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MxTreeViewComponent, MxCheckBoxDirective],
  exports: [MxTreeViewComponent, MxCheckBoxDirective]
})
export class MxTreeViewModule { }
