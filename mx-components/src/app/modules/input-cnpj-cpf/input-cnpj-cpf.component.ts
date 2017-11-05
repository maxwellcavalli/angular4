import { Component, OnInit, forwardRef, HostBinding, ElementRef, Renderer2, Input, Optional, Host, SkipSelf } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl, ControlContainer } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { BaseMaterialComponent } from '../base/base-material-component';
import { FocusMonitor } from '@angular/cdk/a11y';

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
    CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
    { provide: MatFormFieldControl, useExisting: MxInputCnpjCpfComponent }
  ]
})
export class MxInputCnpjCpfComponent extends BaseMaterialComponent {
  @HostBinding() id = `cnpj-cpf-input-${MxInputCnpjCpfComponent.nextId++}`;
  controlType?: string = 'cnpj-cpf-input';

  protected beforeWriteValue(obj: any) {
    if (obj) {
      return this.apply(obj);
    } else {
      return obj
    }
  }

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

}
