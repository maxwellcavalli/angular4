import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

import { MxSearchBoxComponent } from './search-box.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [MxSearchBoxComponent],
  exports: [MxSearchBoxComponent]
})
export class MxSearchBoxModule { }
