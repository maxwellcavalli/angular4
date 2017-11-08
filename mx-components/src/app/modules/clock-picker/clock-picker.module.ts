import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MxClockPickerComponent } from './clock-picker.component';
import { MxClockPickerDirective } from '../../directives/clock-picker.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
  ],
  declarations: [MxClockPickerComponent, MxClockPickerDirective],
  exports: [MxClockPickerComponent, MxClockPickerDirective]
})
export class MxClockPickerModule {

}
