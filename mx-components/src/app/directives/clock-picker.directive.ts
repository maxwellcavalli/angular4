import { Directive, OnInit, Self, Renderer, ElementRef, Renderer2, NgZone } from '@angular/core';
import { DefaultValueAccessor, NgControl } from '@angular/forms';

declare var jquery: any;
declare var $: any;



interface JQuery<HTMLElement> {
  teste(): void;
}


@Directive({
  selector: '[mxClockPicker]'
})
export class ClockPickerDirective extends DefaultValueAccessor {


  el: ElementRef;

  constructor(_renderer: Renderer2,
    _elementRef: ElementRef,
    private zone: NgZone) {

    super(_renderer, _elementRef, true);

    this.el = _elementRef;
  }

  // constructor(@Self() model: NgControl, private elRef: ElementRef, renderer: Renderer) {
  //   super(model, renderer, elRef);
  // }

  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.el.nativeElement);

    this.zone.runOutsideAngular(() => {
      $(this.el.nativeElement).clockpicker({
        placement: 'bottom',
        align: 'left',
        donetext: 'Done',
        afterDone: () => {
          console.log("after done");
          this.onChange(this.el.nativeElement.value);
        }
      });

    });

  }

}
