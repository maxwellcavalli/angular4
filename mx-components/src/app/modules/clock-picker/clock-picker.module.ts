import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockPickerComponent } from './clock-picker.component';
import { ClockPickerDirective } from '../../directives/clock-picker.directive';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ClockPickerComponent, ClockPickerDirective],
  exports: [ClockPickerComponent, ClockPickerDirective]
})
export class ClockPickerModule {

  public value: Date;


}
