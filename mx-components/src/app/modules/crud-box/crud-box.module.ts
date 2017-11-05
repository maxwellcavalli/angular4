import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatIconModule, MatButtonModule } from '@angular/material';
import { MxCrudBoxComponent } from './crud-box.component';

import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule, MatIconModule, MatButtonModule
  ],
  declarations: [MxCrudBoxComponent],
  exports: [MxCrudBoxComponent]
})
export class MxCrudBoxModule { }
