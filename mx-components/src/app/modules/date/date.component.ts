import { Optional, Component, OnInit, Input, Renderer2, ElementRef, forwardRef, HostBinding, Host, SkipSelf, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, DefaultValueAccessor, NG_VALUE_ACCESSOR, ControlValueAccessor, NgControl, ControlContainer, AbstractControl } from '@angular/forms';

import { MatFormFieldControl, } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { BaseMaterialComponent } from '../base/base-material-component';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MxDateComponent),
  multi: true
};

@Component({
  selector: 'mx-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  providers: [
    { provide: MatFormFieldControl, useExisting: MxDateComponent },
    CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR
  ]
})
export class MxDateComponent extends BaseMaterialComponent<Date> {

  @HostBinding() id = `date-input-${MxDateComponent.nextId++}`;
  controlType?: string = 'date-input';

  constructor(
    @Optional() public elRef: ElementRef,
    @Optional() public fm: FocusMonitor,
    @Optional() public renderer: Renderer2,
    @Optional() @Host() @SkipSelf() public controlContainer: ControlContainer) {

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

  public clear() {
    this.value = null;

    this.stateChanges.next();
    this.onChangeCallback(this._value);
  }

}
