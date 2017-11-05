import { Component, OnInit, Input } from '@angular/core';

export interface MxAccordtionItem {
  label: '',
  url: ''
  children: any,
}

@Component({
  selector: 'mx-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class MxAccordionItemComponent implements OnInit {

  @Input() itens: MxAccordtionItem[];

  constructor() { }

  ngOnInit() {
  }

  public hasChildren(item: MxAccordtionItem) {
    return item.children && item.children.length > 0 ? true : false;
  }

  public classHasChildren(item: MxAccordtionItem){
    return this.hasChildren(item) ? 'has-children' : '';
  } 


}
