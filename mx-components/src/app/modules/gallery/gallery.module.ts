import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MxGalleryComponent } from './gallery.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MxGalleryComponent],
  exports: [MxGalleryComponent]
})
export class MxGalleryModule { }
