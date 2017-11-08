import { Component, OnInit, HostBinding, Input, Optional, Self, ElementRef, Renderer2, HostListener, forwardRef, ViewChild } from '@angular/core';
import { MatFormFieldControl } from '@angular/material';
import { NgControl, NG_VALUE_ACCESSOR, ControlValueAccessor, NgModel, ControlContainer } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { FocusMonitor } from '@angular/cdk/a11y';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MxClockPickerComponent),
  multi: true
};

const noop = () => { }

@Component({
  selector: 'mx-clock-picker',
  templateUrl: './clock-picker.component.html',
  styleUrls: ['./clock-picker.component.css'],
  providers: [
    CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
    { provide: MatFormFieldControl, useExisting: MxClockPickerComponent }
  ]
})
export class MxClockPickerComponent implements MatFormFieldControl<any>, ControlValueAccessor {

  @HostBinding() id = `clockpicker-input-${MxClockPickerComponent.nextId++}`;
  controlType?: string = 'clockpicker-input';

  writeValue(obj: any): void {
        this._value = obj;
  }

  private onTouchedCallback: () => void = noop;
  protected onChangeCallback: (_: any) => void = noop;

  @Input() formControl: any;
  @Input() formControlName: string;

  constructor(
    @Optional() public elRef: ElementRef,
    @Optional() public fm: FocusMonitor,
    @Optional() public renderer: Renderer2,
    @Optional() public controlContainer: ControlContainer) {

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

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  stateChanges = new Subject<void>();
  ngControl: NgControl;
  focused: boolean;
  errorState: boolean = false;

  private _placeholder: string;
  protected _value: any;
  private _required = false;
  private _disabled = false;

  static nextId = 0;

  @HostBinding('attr.aria-describedby') describedBy = '';

  @HostBinding('class.floating')
  get shouldPlaceholderFloat() {
    return this.focused || !this.empty;
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() != 'input') {
      event.srcElement.querySelector('input').focus();
    }
  }

  get empty() {
    return this._value === undefined || this._value === '';
  }

  @Input()
  get required() {
    return this._required;
  }
  set required(req) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }

  @Input()
  get placeholder() {
    return this._placeholder;
  }

  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }

  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(dis) {
    this._disabled = coerceBooleanProperty(dis);
    this.stateChanges.next();
  }

  set value(valor: any | null) {
    this._value = valor;
    this.stateChanges.next();
    this.onChangeCallback(this._value);
  }

  get value() {
    return this._value;
  }

  public changeValue(event) {
    this.writeValue(event);
  }

}
