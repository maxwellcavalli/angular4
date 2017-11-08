import { Optional, Component, OnInit, Input, Renderer2, ElementRef, forwardRef, HostBinding, Host, SkipSelf, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, DefaultValueAccessor, NG_VALUE_ACCESSOR, ControlValueAccessor, NgControl, ControlContainer, AbstractControl } from '@angular/forms';

import { MatFormFieldControl, } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import moment from 'moment/src/moment';
//import * as moment from 'moment';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MxDateComponent),
  multi: true
};

const noop = () => { }

@Component({
  selector: 'mx-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  providers: [
    { provide: MatFormFieldControl, useExisting: MxDateComponent },
    CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR
  ]
})
export class MxDateComponent /*extends BaseMaterialComponent*/ {

  @HostBinding() id = `date-input-${MxDateComponent.nextId++}`;
  controlType?: string = 'date-input';

  public clear() {
    this.value = undefined;
  }

  writeValue(obj: any): void {
    if (obj != undefined && obj != null) {
      let _m = moment(obj);
      this._value = _m.toDate(); 
    } else {
      this._value = obj;
    }
  }

  private onTouchedCallback: () => void = noop;
  protected onChangeCallback: (_: any) => void = noop;

  @Input() formControl: any;
  @Input() formControlName: string;

  constructor(
    @Optional() public elRef: ElementRef,
    @Optional() public fm: FocusMonitor,
    @Optional() public renderer: Renderer2,
    @Optional() @Host() @SkipSelf() public controlContainer: ControlContainer) {

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
    if (valor != undefined && valor != null) {
      let _m = moment(valor);
      this._value = _m.toDate();
    } else {

      this._value = valor;
    }

    this.stateChanges.next();
    this.onChangeCallback(this._value);
  }

  get value() {
    return this._value;
  }

  public changeValue(event) {
    if (event != undefined && event != null) {
      let _m = moment(event);
      this.writeValue(_m.toDate());
    } else {
      this.writeValue(event);
    }
  }
}
