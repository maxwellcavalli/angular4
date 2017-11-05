import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
  selector: 'mx-data-table-wraper',
  template: ` <ng-container *ngFor="let row of rows; let index of index; trackBy:columnTrackingRowFn">

                <mx-data-table-row 
                  [row]="row" 
                  [cols]="cols"
                  class="table-row"                  
                  *ngIf="showRipple"> 
                  <ng-container></ng-container>              
                </mx-data-table-row> 

                <mx-data-table-row 
                  [row]="row" 
                  [cols]="cols"
                  class="table-row"
                  *ngIf="!showRipple"> 
                  <ng-container></ng-container>              
                </mx-data-table-row> 
              </ng-container>                
             `,
  styleUrls: ['./data-table.component.scss'],
})
export class MxRowWraperComponent implements OnInit {

  // mx-ripple
  // [mxRippleUnbounded]="false" 

  @Input() rows: any;
  @Input() cols: any;
  @Input() showRipple: boolean;

  ngOnInit(): void {
  }

  columnTrackingFn(index: number, col: any): any {
    return col.$$id;
  }

  columnTrackingRowFn(index: number, row: any): any {
    return row.$$id;
  }


}