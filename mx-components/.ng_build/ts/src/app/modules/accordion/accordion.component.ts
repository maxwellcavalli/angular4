import { Component, OnInit, Input } from '@angular/core';
import { AccordtionItem } from './accordion-item/accordion-item.component';




@Component({
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
})
export class AccordionComponent implements OnInit {

  @Input() itens: AccordtionItem[];

  constructor() { }

  ngOnInit() {
  }

  

}
