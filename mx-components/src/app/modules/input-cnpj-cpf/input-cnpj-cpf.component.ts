import { Component, OnInit, forwardRef, HostBinding, ElementRef, Renderer2, Input, Optional, Host, SkipSelf, ChangeDetectorRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl, ControlContainer, NgControl, ControlValueAccessor } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject } from 'rxjs';
import { BaseMaterialComponent } from '../base/base-material-component';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MxInputCnpjCpfComponent),
  multi: true
};

@Component({
  selector: 'mx-input-cnpj-cpf',
  templateUrl: './input-cnpj-cpf.component.html',
  styleUrls: ['./input-cnpj-cpf.component.css'],
  providers: [
    { provide: MatFormFieldControl, useExisting: MxInputCnpjCpfComponent },
    CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR
  ]
})
export class MxInputCnpjCpfComponent extends BaseMaterialComponent<String> {

  @ViewChild('input') input : any;


  @HostBinding() id = `cnpj-cpf-input-${MxInputCnpjCpfComponent.nextId++}`;
  controlType?: string = 'cnpj-cpf-input';

  private apply(value: String): String {
    if (value && value !== '') {
      if (value.length == 11) { //cpf
        let block1 = value.substring(0, 3);
        let block2 = value.substring(3, 6);
        let block3 = value.substring(6, 9);
        let block4 = value.substring(9, 11);

        let ret = block1 + '.' + block2 + '.' + block3 + '-' + block4

        return ret;
      } else if (value.length == 14) { //cnpj
        let block1 = value.substring(0, 2);
        let block2 = value.substring(2, 5);
        let block3 = value.substring(5, 8);
        let block4 = value.substring(8, 12);
        let block5 = value.substring(12, 14)

        let ret = block1 + '.' + block2 + '.' + block3 + '/' + block4 + '-' + block5;
        return ret;
      } else {
        return value;
      }
    } else {
      return '';
    }
  }

  public maskCpfCnpj(event) {
    let value = event.target.value;
    value = (value as String).trim();

    event.target.value = this.apply(value);
  }

  public removeMask(event) {
    let value = event.target.value;
    value = (value as String).replace(new RegExp('\\/', 'g'), '');
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
      if (this.formControlName != undefined) {
        this.formControl = this.controlContainer.control.get(this.formControlName);
      }
    }
  }

  ngAfterViewInit(){
    let _val: any = (this.input.nativeElement as HTMLInputElement).value;
    if (_val !== undefined){
      _val = this.apply(_val);
      (this.input.nativeElement as HTMLInputElement).value = _val;
    } 
  }

}
