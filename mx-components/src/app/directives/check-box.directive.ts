import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mxCheckbox]'
})
export class MxCheckBoxDirective {

  @Input() mxCheckbox: any;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    let node = this.mxCheckbox.node;
    let pai = this.mxCheckbox.pai;
    node.$$pai = pai;

    this.verifyStatus(node.$$pai);
  }

  @HostListener('click') onClick() {
  }

  @HostListener('change') onChange() {
    let node = this.mxCheckbox.node;
    this.verifyStatus(node.$$pai);
  }

  private verifyStatus(_parent){
    if (_parent != undefined) {
      let count = 0;
      let countIndeterminate = 0;
      _parent.children.forEach(el => {
        if (el.checked == true) {
          count++;
        }

        if (el.indeterminate == true) {
          countIndeterminate++;
        }
      });
      
      if (countIndeterminate > 0){
        _parent.indeterminate = true;
      } else {
        if (count > 0 && count < _parent.children.length) {
          _parent.indeterminate = true;
        } else if (count == 0) {
          _parent.indeterminate = false;
          _parent.checked = false;
        } else if (count == _parent.children.length){
          _parent.checked = true;
          _parent.indeterminate = false;
        }
      }

      if (_parent.$$pai != undefined){
        this.verifyStatus(_parent.$$pai);
      }
    }    
  }

}
