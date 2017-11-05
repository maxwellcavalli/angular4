import { Component, ChangeDetectionStrategy, OnInit, Input } from "@angular/core";

@Component({
  selector: 'mx-data-table-col',
  styleUrls: ['./data-table.component.scss'],
  template: `
                <mx-data-table-value
                  [row]="row"
                  [col]="col"
                  [value]="value(row, col)"
                >
                </mx-data-table-value>
             
             `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MxColComponent implements OnInit {

  @Input() row: any;
  @Input() col: any;

  ngOnInit(): void {
  }

  value(row, col) {
    let _v = undefined;
    let propName = col.prop;
    let idxSpecial = propName.indexOf('$$field-index');
    if ( idxSpecial > -1){
      propName = (propName as String).substr(0, idxSpecial);
    }

    if (propName.indexOf('.') > -1) {
      let _o = row;
      let _a = propName.split('.');

      for (let _f of _a) {        

        if (_o){
          if (_o[_f]) {
            _o = _o[_f];
          } else {
            _o = undefined;
            break;
          }
        }
      }

      _v = _o;
    } else {
      _v = row[propName];
    }

    return _v;
  }


}