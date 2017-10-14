import { OnInit } from '@angular/core';
export interface AccordtionItem {
    label: '';
    url: '';
    children: any;
}
export declare class AccordionItemComponent implements OnInit {
    itens: AccordtionItem[];
    constructor();
    ngOnInit(): void;
    hasChildren(item: AccordtionItem): boolean;
    classHasChildren(item: AccordtionItem): "" | "has-children";
}
