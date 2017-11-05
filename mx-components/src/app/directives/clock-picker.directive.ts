import { Directive, OnInit, Self, Renderer, ElementRef, Renderer2, NgZone, Optional, ChangeDetectorRef, ApplicationRef, HostListener } from '@angular/core';
import { DefaultValueAccessor, NgControl, NgModel } from '@angular/forms';

declare var jquery: any;
declare var $: any;

@Directive({
  selector: '[mxClockPicker]'
})
export class MxClockPickerDirective {

  el: ElementRef;

  constructor(_renderer: Renderer2,
    _elementRef: ElementRef,
    private zone: NgZone,
    private control: NgControl,
    private _cdr: ApplicationRef) {

    this.el = _elementRef;
    this.el.nativeElement.onblur = function () {

      let _v = this.value;
      _v = (_v as String).replace(new RegExp('\\/', 'g'), '');

      if (_v === '') {
        control.control.setValue('');
      }
    };
  }

  public ngAfterViewInit(): void {
    this.el.nativeElement.value = this.control.value;

    this.zone.runOutsideAngular(() => {
      $(this.el.nativeElement).clockpicker({
        placement: 'bottom',
        align: 'left',
        donetext: 'Done',
        afterDone: () => {
          this.control.control.setValue(this.el.nativeElement.value);
          this._cdr.tick();
        }
      });
    });
  }
}
