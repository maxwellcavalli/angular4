import { Component, OnInit, HostBinding, Input, Optional, Self, ElementRef, Renderer2, HostListener, forwardRef, ViewChild } from '@angular/core';
import { MatFormFieldControl } from '@angular/material';
import { NgControl, NG_VALUE_ACCESSOR, ControlValueAccessor, NgModel, ControlContainer } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { FocusMonitor } from '@angular/cdk/a11y';
import { BaseMaterialComponent } from '../base/base-material-component';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MxClockPickerComponent),
  multi: true
};

@Component({
  selector: 'mx-clock-picker',
  templateUrl: './clock-picker.component.html',
  styleUrls: ['./clock-picker.component.css'],
  providers: [
    CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
    { provide: MatFormFieldControl, useExisting: MxClockPickerComponent }
  ]
})
export class MxClockPickerComponent extends BaseMaterialComponent<string> {

  @HostBinding() id = `clockpicker-input-${MxClockPickerComponent.nextId++}`;
  controlType?: string = 'clockpicker-input';

  constructor(
    @Optional() public elRef: ElementRef,
    @Optional() public fm: FocusMonitor,
    @Optional() public renderer: Renderer2,
    @Optional() public controlContainer: ControlContainer) {
    super();

    fm.monitor(elRef.nativeElement, renderer, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);
  }

  ngOnInit() {

    if (this.formControl === undefined) {
      this.formControl = this.controlContainer.control.get(this.formControlName);
    }
  }
}
