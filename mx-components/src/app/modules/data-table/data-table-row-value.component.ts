import { Component, ChangeDetectionStrategy, Input, EventEmitter, OnInit, Output, ElementRef, ViewChild, ViewContainerRef, HostListener } from "@angular/core";

@Component({
  selector: 'mx-data-table-value',
  styleUrls: ['./data-table.component.scss'],
  template: `
            <div [innerHTML]="value" *ngIf="!col.cellTemplate" class="table-row-value"> </div> 
            <ng-template #cellTemplate *ngIf="col.cellTemplate"  [ngTemplateOutlet]="col.cellTemplate" 
                [ngTemplateOutletContext]="getContext()">
            </ng-template>  

             `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MxRowValueComponent implements OnInit {

  @Input() row: any;
  @Input() col: any;
  @Input() value: any;
  @Output() activate: EventEmitter<any> = new EventEmitter();

  element: any;

  getContext() {
    return { row: this.row, col: this.col, value: this.value };
  }

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  @ViewChild('cellTemplate', { read: ViewContainerRef }) cellTemplate: ViewContainerRef;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.cellTemplate) {
      this.cellTemplate.clear();
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    this.activate.emit({
      type: 'click',
      event,
      row: this.row,
      column: this.col,
      value: this.value,
      cellElement: this.element
    });
  }
}