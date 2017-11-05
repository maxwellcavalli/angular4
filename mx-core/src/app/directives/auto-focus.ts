import { Directive, ElementRef, Renderer, Input, Inject, ChangeDetectorRef } from '@angular/core';

@Directive({
    selector: '[mx-focus]'
})
export class MxAutofocusDirective {
    constructor(private el: ElementRef, private renderer: Renderer,
        private cdRef: ChangeDetectorRef) {
    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.el.nativeElement, 'focus');
        this.cdRef.detectChanges();
    }

    ngOnInit() { }


}