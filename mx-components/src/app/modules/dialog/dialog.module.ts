import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatButtonModule } from '@angular/material';

import { MxDialogComponent, MxDialogContentHtmlCompoment, MxDialogContentComponent, MxDialogActionComponent } from './dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [MxDialogComponent, MxDialogContentHtmlCompoment, MxDialogContentComponent, MxDialogActionComponent],
  exports: [MxDialogComponent, MxDialogContentHtmlCompoment, MxDialogContentComponent, MxDialogActionComponent],
  entryComponents: [MxDialogComponent, MxDialogContentHtmlCompoment]
})
export class MxDialogModule { }
