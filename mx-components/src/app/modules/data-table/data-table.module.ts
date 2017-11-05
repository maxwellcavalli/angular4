import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MxDataTableComponent } from './data-table.component';
import { MatPaginatorModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';

import { MxRowWraperComponent } from './data-table-wraper.component';
import { MxRowComponent } from './data-table-row.component';
import { MxRowValueComponent } from './data-table-row-value.component';
import { MxColComponent } from './data-table-col.component';

@NgModule({
  imports: [
    CommonModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule
  ],
  declarations: [MxDataTableComponent, MxRowWraperComponent, MxRowComponent, MxRowValueComponent, MxColComponent],
  exports: [MxDataTableComponent]
})
export class MxDataTableModule { }
