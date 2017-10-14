import { ElementRef } from '@angular/core';
export declare class AccordionClickDirective {
    private el;
    constructor(el: ElementRef);
    onClick(): void;
    private collapseChilds(parent);
}
