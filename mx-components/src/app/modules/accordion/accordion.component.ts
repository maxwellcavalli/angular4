import { Component, OnInit, Input } from '@angular/core';
import { MxAccordtionItem } from './accordion-item/accordion-item.component';


@Component({
  selector: 'mx-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class MxAccordionComponent implements OnInit {

  @Input() itens: MxAccordtionItem[];

  constructor() { }

  ngOnInit() {
  }

  

}
