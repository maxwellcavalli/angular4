import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mx-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class MxSearchBoxComponent implements OnInit {

  @Input() header: string;

  @Input() searchLabel: string = 'Search';
  @Input() addLabel: string = 'Add';
  @Input() resetLabel: string = 'Reset';

  @Input() showAddButton: boolean = true;

  @Input() searchButtonType: string = 'submit';

  @Output() onSearch = new EventEmitter<any>();
  @Output() onReset = new EventEmitter<any>();
  @Output() onAdd = new EventEmitter<any>();


  search(event) {
    if (this.onSearch != undefined) {
      this.onSearch.emit(event);
    }
  }

  reset(event) {
    if (this.onReset != undefined) {
      this.onReset.emit(event);
    }
  }

  add(event){
    if (this.onAdd != undefined) {
      this.onAdd.emit(event);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
