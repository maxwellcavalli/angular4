import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MxInputCnpjCpfComponent } from './input-cnpj-cpf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule
  ],
  declarations: [MxInputCnpjCpfComponent],
  exports: [MxInputCnpjCpfComponent]
})
export class MxInputCnpjCpfModule { }
