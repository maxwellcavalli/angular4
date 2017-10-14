import { Component, Input } from '@angular/core';
export class AccordionComponent {
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
function AccordionComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AccordionComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    AccordionComponent.ctorParameters;
    /** @type {?} */
    AccordionComponent.propDecorators;
    /** @type {?} */
    AccordionComponent.prototype.itens;
}
//# sourceMappingURL=accordion.component.js.map