import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MxUploadComponent } from './upload.component';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatIconModule
  ],
  declarations: [MxUploadComponent],
  exports: [MxUploadComponent]
})
export class MxUploadModule { }
