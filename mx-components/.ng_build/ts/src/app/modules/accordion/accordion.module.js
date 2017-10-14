import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionClickDirective } from '../../directives/accordion-click.directive';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
export class AccordionModule {
}
AccordionModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [AccordionComponent, AccordionClickDirective, AccordionItemComponent],
                exports: [AccordionComponent, AccordionClickDirective]
            },] },
];
/**
 * @nocollapse
 */
AccordionModule.ctorParameters = () => [];
function AccordionModule_tsickle_Closure_declarations() {
    /** @type {?} */
    AccordionModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    AccordionModule.ctorParameters;
}
//# sourceMappingURL=accordion.module.js.map