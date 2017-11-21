import { Component, OnInit, Input, Optional, Host, SkipSelf, HostBinding, forwardRef, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ControlContainer, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => { }
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MxRatingComponent),
  multi: true
};
@Component({
  selector: 'mx-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class MxRatingComponent implements OnInit, ControlValueAccessor {

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  private _value: any;
  private _disabled = false;
  stateChanges = new Subject<void>();
  static nextId = 0;

  @Input() formControl: any;
  @Input() formControlName: string;

  constructor(
    @Optional() @Host() @SkipSelf() public controlContainer: ControlContainer,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    if (this.formControl === undefined) {
      if (this.formControlName != undefined) {
        this.formControl = this.controlContainer.control.get(this.formControlName);
      }
    }

    if (this.formControl !== undefined) {
      this.disabled = this.formControl.disabled;
    }
  }

  get classCursor(){
    if (this.formControl != undefined) {
      if (!this.formControl.disabled) {
        return 'rating-cursor';
      }
    } else {
      if (!this.disabled){
        return 'rating-cursor';
      }
    }

    return '';
  }


  ngOnDestroy() {
    this.stateChanges.unsubscribe();
  }

  writeValue(obj: any): void {
    this._value = obj;

    this.cdr.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  get disabled() {
    return this._disabled;
  }

  @Input()
  set disabled(dis) {
    this._disabled = coerceBooleanProperty(dis);
    this.stateChanges.next();
  }


  public alterRating(_value) {
    if (this.formControl != undefined) {
      if (!this.formControl.disabled) {
        this.value = _value
      }
    } else {
      if (this.disabled == false) {
        this.value = _value
      }
    }
  }


  set value(valor: any | null) {
    if (this._value !== valor) {
      this._value = valor;
      this.onChangeCallback(this._value);
      this.stateChanges.next();
    }
  }
  get value() {
    return this._value;
  }

  public changeValue(event) {
    this.value = event;
  }
}
