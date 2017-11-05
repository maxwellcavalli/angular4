import { Component, OnInit, HostBinding, forwardRef, ElementRef, Renderer2 } from '@angular/core';
import { BaseMaterialComponent } from '../base/base-material-component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { FocusMonitor } from '@angular/cdk/a11y';

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
    CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
    { provide: MatFormFieldControl, useExisting: MxInputTelefoneComponent }
  ]
})
export class MxInputTelefoneComponent extends BaseMaterialComponent {

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

}
