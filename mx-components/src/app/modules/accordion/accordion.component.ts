import { Component, OnInit, Input } from '@angular/core';
import { AccordtionItem } from './accordion-item/accordion-item.component';




@Component({
  selector: 'mx-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() itens: AccordtionItem[];

  constructor() { }

  ngOnInit() {
  }

  

}
