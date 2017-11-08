import { Component, OnInit, HostBinding, forwardRef, ElementRef, Renderer2, Input, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, ControlContainer, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Subject } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MxInputTelefoneComponent),
  multi: true
};

const noop = () => { }

@Component({
  selector: 'mx-input-telefone',
  templateUrl: './input-telefone.component.html',
  styleUrls: ['./input-telefone.component.css'],
  providers: [
    { provide: MatFormFieldControl, useExisting: MxInputTelefoneComponent },
    CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR
  ]
})
export class MxInputTelefoneComponent implements MatFormFieldControl<any>, ControlValueAccessor {

  private onTouchedCallback: () => void = noop;
  protected onChangeCallback: (_: any) => void = noop;


  @HostBinding() id = `telefone-input-${MxInputTelefoneComponent.nextId++}`;
  controlType?: string = 'telefone-input';

  protected beforeWriteValue(obj: any) {
    if (obj) {
      return this.apply(obj);
    } else {
      return obj
    }
  }

  private apply(value: String): String {
    if (value && value !== '') {
      if (value.length == 11) { //cell
        let ddd = value.substring(0, 2);
        let firstBlock = value.substring(2, 7);
        let secondBlock = value.substring(7, 11);

        let ret = '(' + ddd + ') ' + firstBlock + '-' + secondBlock;

        return ret;
      } else if (value.length == 10) { //home
        let ddd = value.substring(0, 2);
        let firstBlock = value.substring(2, 6);
        let secondBlock = value.substring(6, 10);

        let ret = '(' + ddd + ') ' + firstBlock + '-' + secondBlock;
        return ret;
      } else {
        return value;
      }
    } else {
      return '';
    }
  }

  public maskTelefone(event) {
    let value = event.target.value;
    value = (value as String).trim();

    event.target.value = this.apply(value);
  }

  public removeMask(event) {
    let value = event.target.value;
    value = (value as String).replace(new RegExp('\\(', 'g'), '');
    value = (value as String).replace(new RegExp('\\)', 'g'), '');
    value = (value as String).replace(new RegExp('\\-', 'g'), '');
    value = (value as String).replace(new RegExp('\\.', 'g'), '');
    value = (value as String).replace(new RegExp('\\s', 'g'), '');
    value = (value as String).trim();

    event.target.value = value;
  }


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
      if (this.formControlName != undefined) {
        this.formControl = this.controlContainer.control.get(this.formControlName);
      }
    }
  }

  writeValue(obj: any): void {
    if (obj == null) {
      obj = undefined;
    }

    this.value = this.beforeWriteValue(obj);
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
  protected _value: any = undefined;
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
    this.onChangeCallback(valor);
  }

  get value() {
    return this._value;
  }

  public clear() {
    this.writeValue('');
  }

  public changeValue(event) {
    this.writeValue(event);
  }


}
