import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
  selector: 'mx-data-table-row',
  styleUrls: ['./data-table.component.scss'],
  template: ` 
              <ng-container *ngFor="let col of cols; let indexCol of index; trackBy: columnTrackingFn" >

                  <mx-data-table-col
                    [row]="row" class="table-col"
                    [col]="col"
                    [ngStyle]="style(col)"
                    *ngIf="col.hideOnMobile"
                    fxHide fxShow.gt-xs>                    
                    <ng-container></ng-container>
                  </mx-data-table-col>

                  <mx-data-table-col
                    [row]="row" class="table-col"
                    [col]="col"
                    [ngStyle]="style(col)"
                    *ngIf="!col.hideOnMobile">
                    
                    <ng-container></ng-container>

                  </mx-data-table-col>
                
              </ng-container>             
              
             `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MxRowComponent implements OnInit {

  @Input() row: any;
  @Input() cols: any;

  ngOnInit(): void {
  }

  style(col){
    if (col.maxWidth){
      return {'max-width':col.maxWidth+'px'};
    } else {
      return {'max-width':'100%'};
    }
  }

  columnTrackingFn(index: number, col: any): any {
    return col.$$id;
  }

  columnTrackingRowFn(index: number, row: any): any {
    return row.$$id;
  }


}
