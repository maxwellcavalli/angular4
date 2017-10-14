import { Component, Directive, ElementRef, HostListener, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'mx-header',
                template: "\n    <h1>\n      <ng-content></ng-content>\n    </h1>\n  ",
                styles: ["\n    h1 {\n        color: red;\n    }\n  "]
            },] },
];
/**
 * @nocollapse
 */
HeaderComponent.ctorParameters = function () { return []; };
var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
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
HeaderModule.ctorParameters = function () { return []; };
var AccordionComponent = (function () {
    function AccordionComponent() {
    }
    /**
     * @return {?}
     */
    AccordionComponent.prototype.ngOnInit = function () {
    };
    return AccordionComponent;
}());
AccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'mx-accordion',
                template: "\n    <div id='cssmenu'>\n      <mx-accordion-item [itens]=\"itens\">\n      </mx-accordion-item>\n    </div>\n\n    <!-- <div id='cssmenu'>\n      <ul>\n        <li>\n          <a href='#'>\n            <span>Home</span>\n          </a>\n        </li>\n        <li class='active has-sub'>\n          <a href='#' mxAccordionClick>\n            <span>Products</span>\n            <span class=\"holder\"></span>\n          </a>\n          <ul>\n            <li class='has-sub'>\n              <a href='#' mxAccordionClick>\n                <span>Product 1</span>\n              </a>\n              <ul>\n                <li>\n                  <a href='#'>\n                    <span>Sub Product</span>\n                  </a>\n                </li>\n                <li class='last'>\n                  <a href='#'>\n                    <span>Sub Product</span>\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class='has-sub'>\n              <a href='#'>\n                <span>Product 2</span>\n              </a>\n              <ul>\n                <li>\n                  <a href='#'>\n                    <span>Sub Product</span>\n                  </a>\n                </li>\n                <li class='last'>\n                  <a href='#'>\n                    <span>Sub Product</span>\n                  </a>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </li>\n        <li>\n          <a href='#'>\n            <span>About</span>\n          </a>\n        </li>\n        <li class='last'>\n          <a href='#'>\n            <span>Contact</span>\n          </a>\n        </li>\n      </ul>\n    </div> -->\n  ",
                styles: ["\n    #cssmenu {\n      width: 300px;\n      font-family: Helvetica, Arial, sans-serif;\n      color: #ffffff;\n    }\n  "]
            },] },
];
/**
 * @nocollapse
 */
AccordionComponent.ctorParameters = function () { return []; };
AccordionComponent.propDecorators = {
    'itens': [{ type: Input },],
};
var AccordionClickDirective = (function () {
    /**
     * @param {?} el
     */
    function AccordionClickDirective(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    AccordionClickDirective.prototype.onClick = function () {
        var _this = this;
        var /** @type {?} */ _a = ((this.el.nativeElement));
        var /** @type {?} */ _li = _a.parentElement;
        var /** @type {?} */ _ul = _li.querySelector('ul');
        Array.from(_li.parentElement.children).forEach(function (el) {
            if (el.classList.contains('open')) {
                if (el !== _li) {
                    el.classList.remove('open');
                    el.querySelector('.holder').classList.remove('open');
                    el.querySelector('ul').classList.remove('open');
                    _this.collapseChilds(el.querySelector('ul'));
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
    };
    /**
     * @param {?} parent
     * @return {?}
     */
    AccordionClickDirective.prototype.collapseChilds = function (parent) {
        var _this = this;
        Array.from(parent.children).forEach(function (el) {
            if (el.classList.contains('open')) {
                el.classList.remove('open');
                el.querySelector('.holder').classList.remove('open');
                el.querySelector('ul').classList.remove('open');
                _this.collapseChilds(el.querySelector('ul'));
            }
        });
    };
    return AccordionClickDirective;
}());
AccordionClickDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mxAccordionClick]'
            },] },
];
/**
 * @nocollapse
 */
AccordionClickDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
AccordionClickDirective.propDecorators = {
    'onClick': [{ type: HostListener, args: ['click',] },],
};
var AccordionItemComponent = (function () {
    function AccordionItemComponent() {
    }
    /**
     * @return {?}
     */
    AccordionItemComponent.prototype.ngOnInit = function () {
    };
    /**
     * @param {?} item
     * @return {?}
     */
    AccordionItemComponent.prototype.hasChildren = function (item) {
        return item.children && item.children.length > 0 ? true : false;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    AccordionItemComponent.prototype.classHasChildren = function (item) {
        return this.hasChildren(item) ? 'has-children' : '';
    };
    return AccordionItemComponent;
}());
AccordionItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'mx-accordion-item',
                template: "\n    <ul class=\"ul-item\">\n\n      <li class='active {{classHasChildren(item)}}' *ngFor=\"let item of itens\">\n\n        <ng-container *ngIf=\"hasChildren(item)\">\n          <a href='#' mxAccordionClick>\n            <span>{{item.label}} </span>\n            <span class=\"holder\"></span>\n          </a>\n      \n          <mx-accordion-item [itens]=\"item.children\">\n          </mx-accordion-item>\n\n        </ng-container>\n\n        <ng-container *ngIf=\"!hasChildren(item)\">\n          <a href='{{item.url}}'>\n            <span>{{item.label}} </span>\n          </a>\n        </ng-container>\n      </li>\n    </ul>\n  ",
                styles: ["\n\n    ul.open {\n      max-height: 2000px !important;\n      -webkit-transition: max-height 0.5s ease-in-out !important;\n      transition: max-height 0.5s ease-in-out !important;\n      opacity: 1 !important\n    } \n\n    ul li ul:first-child {\n      -webkit-transition: max-height .5s ease-in-out;\n      transition: max-height .5s ease-in-out;\n      opacity: 0;\n      max-height: 0;\n\n      overflow: hidden;\n      -webkit-animation: accordionOut 0.1s alternate ease-in-out both 1;\n              animation: accordionOut 0.1s alternate ease-in-out both 1;\n    }\n\n    @-webkit-keyframes accordionOut {\n      0% {\n         opacity: 0;\n       }\n       100% {\n        opacity:1;\n      }\n    }\n\n    @keyframes accordionOut {\n      0% {\n         opacity: 0;\n       }\n       100% {\n        opacity:1;\n      }\n    }  \n\n    li a:hover {\n      opacity: .9\n    }\n\n    .holder.open::after,\n    .holder.open::before {\n      display: block;\n      position: absolute;\n      content: \"\";\n      width: 6px;\n      height: 6px;\n      right: 20px;\n      z-index: 10;\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg);\n\n      -webkit-transition-duration: 0.5s;\n\n              transition-duration: 0.5s;\n    }\n\n    .holder::after,\n    .holder::before {\n      display: block;\n      position: absolute;\n      content: \"\";\n      width: 6px;\n      height: 6px;\n      right: 20px;\n      z-index: 10;\n      -webkit-transform: rotate(-135deg);\n      transform: rotate(-135deg);\n\n      -webkit-transition-duration: 0.5s;\n\n              transition-duration: 0.5s;\n    }\n\n    ul,\n    ul li,\n    ul li a {\n      margin: 0;\n      padding: 0;\n      border: 0;\n      list-style: none;\n      line-height: 1;\n      display: block;\n      position: relative;\n      -webkit-box-sizing: border-box;\n      box-sizing: border-box;\n    }\n\n\n    .align-right {\n      float: right;\n    }\n\n    ul > li > a {\n      padding: 15px 20px;\n      border-left: 1px solid #1682ba;\n      border-right: 1px solid #1682ba;\n      border-top: 1px solid #1682ba;\n      cursor: pointer;\n      z-index: 2;\n      font-size: 14px;\n      font-weight: bold;\n      text-decoration: none;\n      color: #ffffff;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);\n      background: #36aae7;\n      background: -webkit-gradient(linear, left top, left bottom, from(#36aae7), to(#1fa0e4));\n      background: linear-gradient(#36aae7, #1fa0e4);\n      -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);\n              box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);\n    }\n\n    ul > li > a:hover,\n    ul > li.active > a,\n    ul > li.open > a {\n      color: #eeeeee;\n      background: #1fa0e4;\n      background: -webkit-gradient(linear, left top, left bottom, from(#1fa0e4), to(#1992d1));\n      background: linear-gradient(#1fa0e4, #1992d1);\n    }\n\n    ul > li.open > a {\n      -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.15);\n              box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.15);\n      border-bottom: 1px solid #1682ba;\n    }\n\n    ul > li:last-child > a,\n    ul > li.last > a {\n      border-bottom: 1px solid #1682ba;\n    }\n\n    .holder {\n      width: 0;\n      height: 0;\n      position: absolute;\n      top: 0;\n      right: 0;\n    }\n\n    .holder::after {\n      top: 17px;\n      border-top: 2px solid #ffffff;\n      border-left: 2px solid #ffffff;\n    }\n\n    ul > li > a:hover > span::after,\n    ul > li.active > a > span::after,\n    ul > li.open > a > span::after {\n      border-color: #eeeeee;\n    }\n\n    .holder::before {\n      top: 18px;\n      border-top: 2px solid;\n      border-left: 2px solid;\n      border-top-color: inherit;\n      border-left-color: inherit;\n    }\n\n    ul ul li a {\n      cursor: pointer;\n      border-bottom: 1px solid #32373e;\n      border-left: 1px solid #32373e;\n      border-right: 1px solid #32373e;\n      border-top: none;\n      padding: 15px 20px;\n      z-index: 1;\n      text-decoration: none;\n      font-size: 13px;\n      color: #eeeeee;\n      background: #49505a;\n      -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n              box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n    }\n\n    ul ul li:hover > a,\n    ul ul li.open > a,\n    ul ul li.active > a {\n      background: #424852;\n      color: #ffffff;\n    }\n\n    ul ul li:first-child > a {\n      -webkit-box-shadow: none;\n              box-shadow: none;\n    }\n\n    ul ul ul li:first-child > a {\n      -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n              box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n    }\n\n    ul ul ul li a {\n      padding-left: 30px;\n    }\n\n    ul ul ul ul li a {\n        padding-left: 40px;\n    }\n\n    ul ul ul ul ul li a {\n        padding-left: 50px;\n    }\n\n    ul ul ul ul ul ul li a {\n        padding-left: 60px;\n    }\n\n    ul > li > ul > li:last-child > a,\n    ul > li > ul > li.last > a {\n      border-bottom: 0;\n    }\n    ul > li > ul > li.open:last-child > a,\n    ul > li > ul > li.last.open > a {\n      border-bottom: 1px solid #32373e;\n    }\n    ul > li > ul > li.open:last-child > ul > li:last-child > a {\n      border-bottom: 0;\n    }\n    ul ul li.has-sub > a::after {\n      display: block;\n      position: absolute;\n      content: \"\";\n      width: 5px;\n      height: 5px;\n      right: 20px;\n      z-index: 10;\n      top: 11.5px;\n      border-top: 2px solid #eeeeee;\n      border-left: 2px solid #eeeeee;\n      -webkit-transform: rotate(-135deg);\n      transform: rotate(-135deg);\n    }\n    ul ul li.active > a::after,\n    ul ul li.open > a::after,\n    ul ul li > a:hover::after {\n      border-color: #ffffff;\n    }\n\n\n    .animateIn {\n      overflow: hidden;\n      -webkit-transition: all 0.3s ease-in;\n      transition: all 0.3s ease-in;\n\n      opacity: 1;\n    }\n  "]
            },] },
];
/**
 * @nocollapse
 */
AccordionItemComponent.ctorParameters = function () { return []; };
AccordionItemComponent.propDecorators = {
    'itens': [{ type: Input },],
};
var AccordionModule = (function () {
    function AccordionModule() {
    }
    return AccordionModule;
}());
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
AccordionModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { HeaderModule, AccordionModule, AccordionClickDirective as ɵc, AccordionItemComponent as ɵd, AccordionComponent as ɵb, HeaderComponent as ɵa };
//# sourceMappingURL=mx-components.es5.js.map
