import { Component, OnInit, Input } from '@angular/core';

export interface AccordtionItem {
  label: '',
  url: ''
  children: any,
}

@Component({
  selector: 'mx-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent implements OnInit {

  @Input() itens: AccordtionItem[];

  constructor() { }

  ngOnInit() {
  }

  public hasChildren(item: AccordtionItem) {
    return item.children && item.children.length > 0 ? true : false;
  }

  public classHasChildren(item: AccordtionItem){
    return this.hasChildren(item) ? 'has-children' : '';
  } 


}
