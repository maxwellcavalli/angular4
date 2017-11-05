import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MxInputTelefoneComponent } from './input-telefone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule
  ],
  declarations: [MxInputTelefoneComponent],
  exports: [MxInputTelefoneComponent]
})
export class MxInputTelefoneModule { }
