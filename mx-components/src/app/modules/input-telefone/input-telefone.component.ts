import { Component, OnInit, HostBinding, forwardRef, ElementRef, Renderer2, Input, Optional, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, ControlContainer, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Subject } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { BaseMaterialComponent } from '../base/base-material-component';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MxInputTelefoneComponent),
  multi: true
};

@Component({
  selector: 'mx-input-telefone',
  templateUrl: './input-telefone.component.html',
  styleUrls: ['./input-telefone.component.css'],
  providers: [
    { provide: MatFormFieldControl, useExisting: MxInputTelefoneComponent },
    CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR
  ]
})
export class MxInputTelefoneComponent extends BaseMaterialComponent<String>{

  @HostBinding() id = `telefone-input-${MxInputTelefoneComponent.nextId++}`;
  controlType?: string = 'telefone-input';

  @ViewChild('input') input: any;
  private formated: boolean = false;

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
      if (this.formControlName != undefined) {
        this.formControl = this.controlContainer.control.get(this.formControlName);
      }
    }
  }

  ngAfterViewChecked() {

    if (!this.formated) {
      let _val: any = this.value;

      if (_val !== undefined) {
        _val = this.apply(_val);
        (this.input.nativeElement as HTMLInputElement).value = _val;
        this.formated = true;
      }
    }
  }


}
