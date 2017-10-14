import { Directive, ElementRef, HostListener } from '@angular/core';
export class AccordionClickDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    onClick() {
        let /** @type {?} */ _a = ((this.el.nativeElement));
        let /** @type {?} */ _li = _a.parentElement;
        let /** @type {?} */ _ul = _li.querySelector('ul');
        Array.from(_li.parentElement.children).forEach(el => {
            if (el.classList.contains('open')) {
                if (el !== _li) {
                    el.classList.remove('open');
                    el.querySelector('.holder').classList.remove('open');
                    el.querySelector('ul').classList.remove('open');
                    this.collapseChilds(el.querySelector('ul'));
                }
            }
        });
        if (_li.classList.contains('open')) {
            _li.classList.remove('open');
            _ul.classList.remove('open');
            _li.querySelector('.holder').classList.remove('open');
            this.collapseChilds(_ul);
        }
        else {
            _li.classList.add('open');
            _ul.classList.add('open');
            _li.querySelector('.holder').classList.add('open');
        }
    }
    /**
     * @param {?} parent
     * @return {?}
     */
    collapseChilds(parent) {
        Array.from(parent.children).forEach((el) => {
            if (el.classList.contains('open')) {
                el.classList.remove('open');
                el.querySelector('.holder').classList.remove('open');
                el.querySelector('ul').classList.remove('open');
                this.collapseChilds(el.querySelector('ul'));
            }
        });
    }
}
AccordionClickDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mxAccordionClick]'
            },] },
];
/**
 * @nocollapse
 */
AccordionClickDirective.ctorParameters = () => [
    { type: ElementRef, },
];
AccordionClickDirective.propDecorators = {
    'onClick': [{ type: HostListener, args: ['click',] },],
};
function AccordionClickDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    AccordionClickDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    AccordionClickDirective.ctorParameters;
    /** @type {?} */
    AccordionClickDirective.propDecorators;
    /** @type {?} */
    AccordionClickDirective.prototype.el;
}
//# sourceMappingURL=accordion-click.directive.js.map