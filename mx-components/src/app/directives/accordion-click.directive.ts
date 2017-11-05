import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mxAccordionClick]'
})
export class MxAccordionClickDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('click') onClick() {
    let _a = (this.el.nativeElement as HTMLLinkElement);
    let _li = _a.parentElement;
    let _ul = _li.querySelector('ul');

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

    } else {

      _li.classList.add('open');
      _ul.classList.add('open');

      _li.querySelector('.holder').classList.add('open');

    }
  }

  private collapseChilds(parent: any){
    Array.from(parent.children).forEach((el: HTMLLIElement) => {
      if (el.classList.contains('open')) {
        el.classList.remove('open');
        el.querySelector('.holder').classList.remove('open');
        el.querySelector('ul').classList.remove('open');

        this.collapseChilds(el.querySelector('ul'));
      }
    });
  }

}
