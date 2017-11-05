import { Component, OnInit, Input, Output, EventEmitter, ViewChild, TemplateRef, SimpleChanges, ChangeDetectionStrategy, KeyValueDiffer, KeyValueDiffers, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { MatPaginator } from '@angular/material';

import { MxCustomPage, MxCustomSort } from 'mx-core';

@Component({
  selector: 'mx-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MxDataTableComponent {

  @ViewChild('cellNormal') cellNormal: TemplateRef<any>;
  @ViewChild('cellEdit') cellEdit: TemplateRef<any>;
  @ViewChild('cellDeleteButton') cellDeleteButton: TemplateRef<any>;
  @ViewChild('cellCheckbox') cellCheckbox: TemplateRef<any>;
  @ViewChild('cellTplDate') cellTplDate: TemplateRef<any>;

  @Input() page: MxCustomPage = new MxCustomPage();

  @Input() showPaginator: boolean = true;
  @Input() containerStyleClass: String = 'mat-elevation-z8 table-container'
  @Input() emptyMessage: String = 'Table is empty';

  @Output() onPage = new EventEmitter<MxCustomPage>();
  @Output() onSort = new EventEmitter<MxCustomSort>();
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  public titles: Array<any>;
  private pattern = '$$field-index';

  rowDiffer: KeyValueDiffer<{}, {}>;

  showRipple = false;

  get hasRows() {
    if (this._internalRows) {
      return this._internalRows.length > 0
    } else {
      return false;
    }
  }

  private _internalRows: any;
  @Input() set rows(value: any) {
    this._internalRows = value;
  }
  get rows() {
    return this._internalRows;
  }

  private _internalColumns: any;
  @Input() set cols(value: any) {
    if (value) {
      this._internalColumns = this.initColumns(value)

      if (this._internalRows) {
        this._internalRows.forEach(el => {
          el.cols = this._internalColumns;
        });
      }

    } else {
      this._internalColumns = value;
    }
  }
  get cols() {
    return this._internalColumns;
  }
  private initColumns(value: any) {
    let index = 0;
    let _titles = [];
    let _cols = [];

    value.forEach(el => {
      let _l = _titles.filter((_v: String) => {

        if (_v.indexOf(this.pattern) > -1) {
          _v = _v.substring(0, _v.indexOf(this.pattern));
        }
        return _v === el.prop;
      }).length;

      let _tmpProp = undefined;
      if (_l > 0) {
        _tmpProp = el.prop + this.pattern + _l;

      } else {
        _tmpProp = el.prop;
      }

      _titles.push(_tmpProp);

      var y = Object.assign({}, el);
      y.prop = _tmpProp;

      if (!(y.cellTemplate)) {
        if (y.selectable === true) {
          y.cellTemplate = this.cellEdit;
        } else {
          y.cellTemplate = this.cellNormal;
        }
      }

      y.$$id = index++;
      _cols.push(y);
    });

    this.titles = _titles;
    return _cols;
  }

  constructor(differs: KeyValueDiffers,
    private cd: ChangeDetectorRef,
    private applicationRef: ApplicationRef) {
    this.rowDiffer = differs.find({}).create();
  }

  ngOnInit() {
    if (this.page === undefined) {
      this.showPaginator = false;
    }
  }

  ngDoCheck(): void {
    if (this.rowDiffer.diff(this.rows)) {
      this._internalRows = this.rows;
      this.cd.markForCheck();
    }
  }

  /****************** event methods **************/
  edit(value, row) {
    if (this.onEdit) {
      let _o = { value: value, row: row };
      this.onEdit.emit(_o);
    }
  }

  delete(value, row) {
    if (this.onDelete) {
      let _o = { value: value, row: row };
      this.onDelete.emit(_o);
    }
  }
  /**********************************************/


  /**************** paginator *******************/
  sortData(event) {
    let _s = new MxCustomSort();
    _s.field = event.active;
    _s.direction = event.direction;

    if (this.onSort) {
      this.onSort.emit(_s);
    }
  }

  changePage(event) {

    if (this.onPage) {
      this.page.pageIndex = event.pageIndex;
      this.page.pageSize = event.pageSize;

      this.onPage.emit(this.page);
    }
  }
  /*******************************************/

  /************************** column style ********************/
  getStyle(col) {
    if (col.maxWidth) {
      return { 'max-width.px': col.maxWidth, 'flex': 1 }
    } else {
      return { 'max-width': '100%', 'flex': 1 };
    }
  }
  /********************************************************** */
}

// export class MdCustomSort {
//   field: string = '';
//   direction: string;
// }

// export class MdCustomPage {
//   recordCount: number = 0;
//   pageIndex: number = 0;
//   pageSize: number = 10;
//   pageSizeOptions: Array<number> = [5, 10, 25, 100];
// }
