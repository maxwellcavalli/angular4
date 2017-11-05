import { Component, OnInit, Input, Renderer2, ElementRef, forwardRef, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, DefaultValueAccessor, NG_VALUE_ACCESSOR, ControlValueAccessor, NgControl } from '@angular/forms';

import { MatFormFieldControl, MAT_DATE_LOCALE, NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { BaseMaterialComponent } from '../base/base-material-component';

import moment from 'moment/src/moment'


const MY_DATE_FORMATS = {
  parse: {
    //dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
    dateInput: { year: 'numeric', month: 'numeric', day: 'numeric' }
  },
  display: {
    // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};

export class MyDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    if (displayFormat == "input") {
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      let _fmt = this._to2digit(day) + '/' + this._to2digit(month) + '/' + year;
      return _fmt
    } else {
      return date.toDateString();
    }
  }

  parse(value: any): Date | null {
    if (value === '') {
      value = null;
    }

    if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
      const str = value.split('/');
      if (str.length < 2 || isNaN(+str[0]) || isNaN(+str[1]) || isNaN(+str[2])) {
        return null;
      }
      if (str[0].length == 2 && str[1].length == 2 && str[2].length == 4) {
        let _m = moment(value, 'DD/MM/YYYY');

        if (_m.isValid() === false) {
          return null;
        }
      }

      return new Date(Number(str[2]), Number(str[1]) - 1, Number(str[0]), 12);
    }

    const timestamp = typeof value === 'number' ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
  }

  private _to2digit(n: number) {
    return ('00' + n).slice(-2);
  }
}

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
    CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
    { provide: MatFormFieldControl, useExisting: MxDateComponent },

    { provide: DateAdapter, useClass: MyDateAdapter },
    { provide: MY_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ]
})
export class MxDateComponent extends BaseMaterialComponent {
  
  @HostBinding() id = `date-input-${MxDateComponent.nextId++}`;
  controlType?: string = 'date-input';
  
}
