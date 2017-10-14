import { Component, Directive, ElementRef, HostListener, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class HeaderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'mx-header',
                template: `
    <h1>
      <ng-content></ng-content>
    </h1>
  `,
                styles: [`
    h1 {
        color: red;
    }
  `]
            },] },
];
/**
 * @nocollapse
 */
HeaderComponent.ctorParameters = () => [];

class HeaderModule {
}
HeaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [HeaderComponent],
                exports: [HeaderComponent]
            },] },
];
/**
 * @nocollapse
 */
HeaderModule.ctorParameters = () => [];

class AccordionComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
AccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'mx-accordion',
                template: `
    <div id='cssmenu'>
      <mx-accordion-item [itens]="itens">
      </mx-accordion-item>
    </div>

    <!-- <div id='cssmenu'>
      <ul>
        <li>
          <a href='#'>
            <span>Home</span>
          </a>
        </li>
        <li class='active has-sub'>
          <a href='#' mxAccordionClick>
            <span>Products</span>
            <span class="holder"></span>
          </a>
          <ul>
            <li class='has-sub'>
              <a href='#' mxAccordionClick>
                <span>Product 1</span>
              </a>
              <ul>
                <li>
                  <a href='#'>
                    <span>Sub Product</span>
                  </a>
                </li>
                <li class='last'>
                  <a href='#'>
                    <span>Sub Product</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class='has-sub'>
              <a href='#'>
                <span>Product 2</span>
              </a>
              <ul>
                <li>
                  <a href='#'>
                    <span>Sub Product</span>
                  </a>
                </li>
                <li class='last'>
                  <a href='#'>
                    <span>Sub Product</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href='#'>
            <span>About</span>
          </a>
        </li>
        <li class='last'>
          <a href='#'>
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </div> -->
  `,
                styles: [`
    #cssmenu {
      width: 300px;
      font-family: Helvetica, Arial, sans-serif;
      color: #ffffff;
    }
  `]
            },] },
];
/**
 * @nocollapse
 */
AccordionComponent.ctorParameters = () => [];
AccordionComponent.propDecorators = {
    'itens': [{ type: Input },],
};

class AccordionClickDirective {
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

class AccordionItemComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} item
     * @return {?}
     */
    hasChildren(item) {
        return item.children && item.children.length > 0 ? true : false;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    classHasChildren(item) {
        return this.hasChildren(item) ? 'has-children' : '';
    }
}
AccordionItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'mx-accordion-item',
                template: `
    <ul class="ul-item">

      <li class='active {{classHasChildren(item)}}' *ngFor="let item of itens">

        <ng-container *ngIf="hasChildren(item)">
          <a href='#' mxAccordionClick>
            <span>{{item.label}} </span>
            <span class="holder"></span>
          </a>
      
          <mx-accordion-item [itens]="item.children">
          </mx-accordion-item>

        </ng-container>

        <ng-container *ngIf="!hasChildren(item)">
          <a href='{{item.url}}'>
            <span>{{item.label}} </span>
          </a>
        </ng-container>
      </li>
    </ul>
  `,
                styles: [`

    ul.open {
      max-height: 2000px !important;
      -webkit-transition: max-height 0.5s ease-in-out !important;
      transition: max-height 0.5s ease-in-out !important;
      opacity: 1 !important
    } 

    ul li ul:first-child {
      -webkit-transition: max-height .5s ease-in-out;
      transition: max-height .5s ease-in-out;
      opacity: 0;
      max-height: 0;

      overflow: hidden;
      -webkit-animation: accordionOut 0.1s alternate ease-in-out both 1;
              animation: accordionOut 0.1s alternate ease-in-out both 1;
    }

    @-webkit-keyframes accordionOut {
      0% {
         opacity: 0;
       }
       100% {
        opacity:1;
      }
    }

    @keyframes accordionOut {
      0% {
         opacity: 0;
       }
       100% {
        opacity:1;
      }
    }  

    li a:hover {
      opacity: .9
    }

    .holder.open::after,
    .holder.open::before {
      display: block;
      position: absolute;
      content: "";
      width: 6px;
      height: 6px;
      right: 20px;
      z-index: 10;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);

      -webkit-transition-duration: 0.5s;

              transition-duration: 0.5s;
    }

    .holder::after,
    .holder::before {
      display: block;
      position: absolute;
      content: "";
      width: 6px;
      height: 6px;
      right: 20px;
      z-index: 10;
      -webkit-transform: rotate(-135deg);
      transform: rotate(-135deg);

      -webkit-transition-duration: 0.5s;

              transition-duration: 0.5s;
    }

    ul,
    ul li,
    ul li a {
      margin: 0;
      padding: 0;
      border: 0;
      list-style: none;
      line-height: 1;
      display: block;
      position: relative;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }


    .align-right {
      float: right;
    }

    ul > li > a {
      padding: 15px 20px;
      border-left: 1px solid #1682ba;
      border-right: 1px solid #1682ba;
      border-top: 1px solid #1682ba;
      cursor: pointer;
      z-index: 2;
      font-size: 14px;
      font-weight: bold;
      text-decoration: none;
      color: #ffffff;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
      background: #36aae7;
      background: -webkit-gradient(linear, left top, left bottom, from(#36aae7), to(#1fa0e4));
      background: linear-gradient(#36aae7, #1fa0e4);
      -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);
              box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }

    ul > li > a:hover,
    ul > li.active > a,
    ul > li.open > a {
      color: #eeeeee;
      background: #1fa0e4;
      background: -webkit-gradient(linear, left top, left bottom, from(#1fa0e4), to(#1992d1));
      background: linear-gradient(#1fa0e4, #1992d1);
    }

    ul > li.open > a {
      -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.15);
              box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.15);
      border-bottom: 1px solid #1682ba;
    }

    ul > li:last-child > a,
    ul > li.last > a {
      border-bottom: 1px solid #1682ba;
    }

    .holder {
      width: 0;
      height: 0;
      position: absolute;
      top: 0;
      right: 0;
    }

    .holder::after {
      top: 17px;
      border-top: 2px solid #ffffff;
      border-left: 2px solid #ffffff;
    }

    ul > li > a:hover > span::after,
    ul > li.active > a > span::after,
    ul > li.open > a > span::after {
      border-color: #eeeeee;
    }

    .holder::before {
      top: 18px;
      border-top: 2px solid;
      border-left: 2px solid;
      border-top-color: inherit;
      border-left-color: inherit;
    }

    ul ul li a {
      cursor: pointer;
      border-bottom: 1px solid #32373e;
      border-left: 1px solid #32373e;
      border-right: 1px solid #32373e;
      border-top: none;
      padding: 15px 20px;
      z-index: 1;
      text-decoration: none;
      font-size: 13px;
      color: #eeeeee;
      background: #49505a;
      -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
              box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }

    ul ul li:hover > a,
    ul ul li.open > a,
    ul ul li.active > a {
      background: #424852;
      color: #ffffff;
    }

    ul ul li:first-child > a {
      -webkit-box-shadow: none;
              box-shadow: none;
    }

    ul ul ul li:first-child > a {
      -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
              box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }

    ul ul ul li a {
      padding-left: 30px;
    }

    ul ul ul ul li a {
        padding-left: 40px;
    }

    ul ul ul ul ul li a {
        padding-left: 50px;
    }

    ul ul ul ul ul ul li a {
        padding-left: 60px;
    }

    ul > li > ul > li:last-child > a,
    ul > li > ul > li.last > a {
      border-bottom: 0;
    }
    ul > li > ul > li.open:last-child > a,
    ul > li > ul > li.last.open > a {
      border-bottom: 1px solid #32373e;
    }
    ul > li > ul > li.open:last-child > ul > li:last-child > a {
      border-bottom: 0;
    }
    ul ul li.has-sub > a::after {
      display: block;
      position: absolute;
      content: "";
      width: 5px;
      height: 5px;
      right: 20px;
      z-index: 10;
      top: 11.5px;
      border-top: 2px solid #eeeeee;
      border-left: 2px solid #eeeeee;
      -webkit-transform: rotate(-135deg);
      transform: rotate(-135deg);
    }
    ul ul li.active > a::after,
    ul ul li.open > a::after,
    ul ul li > a:hover::after {
      border-color: #ffffff;
    }


    .animateIn {
      overflow: hidden;
      -webkit-transition: all 0.3s ease-in;
      transition: all 0.3s ease-in;

      opacity: 1;
    }
  `]
            },] },
];
/**
 * @nocollapse
 */
AccordionItemComponent.ctorParameters = () => [];
AccordionItemComponent.propDecorators = {
    'itens': [{ type: Input },],
};

class AccordionModule {
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

/**
 * Generated bundle index. Do not edit.
 */

export { HeaderModule, AccordionModule, AccordionClickDirective as ɵc, AccordionItemComponent as ɵd, AccordionComponent as ɵb, HeaderComponent as ɵa };
//# sourceMappingURL=mx-components.js.map
