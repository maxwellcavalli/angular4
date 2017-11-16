import { Directive, OnInit, Self, Renderer, ElementRef, Renderer2, NgZone, Optional, ChangeDetectorRef, ApplicationRef, HostListener } from '@angular/core';
import { DefaultValueAccessor, NgControl, NgModel, FormControlDirective } from '@angular/forms';

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
    this.el.nativeElement.onchange = function () {

      let _v = this.value;
      _v = (_v as String).replace(new RegExp('\\/', 'g'), '');

      if (_v === '') {
        control.control.setValue(null);
      }
    };
  }

  public ngAfterViewInit(): void {

    this.zone.runOutsideAngular(() => {
      if (this.control.value != undefined){
        this.el.nativeElement.value = this.control.value;
      }
      
      $(this.el.nativeElement).clockpicker({
        placement: 'bottom',
        align: 'left',
        donetext: 'Done',
        afterDone: () => {
          (this.control as FormControlDirective).control.setValue(this.el.nativeElement.value);
          (this.control as FormControlDirective).control.markAsDirty({ onlySelf: true });
          (this.control as FormControlDirective).control.parent.markAsDirty({ onlySelf: true });
          this._cdr.tick();
        }
      });
    });
  }
}

