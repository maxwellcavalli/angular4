import { Component, OnInit, ViewChild } from '@angular/core';

const SMALL_WIDTH_BREAKPOINT = 960;

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
  @ViewChild('sidenav') sidemenu: any;

  menu: any = [
    { label: 'Home', icon: 'home', url: '/' },
    { label: 'Requests', icon: 'list', url: '/' },
    { label: 'My Budgets', icon: 'receipt', url: '/', badge: 10 },
    { label: 'Suppliers', icon: 'dashboard', url: '/' },

    {
      label: 'Settings', icon: 'settings',
      children: [
        {
          label: 'Product',
          children: [
            { label: 'Category', url: '/' },
            { label: 'Group', url: '/' },
            { label: 'Product', url: '/' }
          ]
        },

        {
          label: 'Address',
          children: [
            { label: 'State', url: '/' },
            { label: 'City', url: '/' },
            { label: 'District', url: '/' },
            { label: 'Postal Code', url: '/' }
          ]
        },

        { label: 'Cliente', url: '/' }
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }


  isOver(): boolean {
    return this.mediaMatcher.matches;
  }

  menuMouseOver(): void {
    if (this.mediaMatcher.matches) {
      this.sidemenu.mode = 'over';
    }
  }

  menuMouseOut(): void {
    if (this.mediaMatcher.matches) {
      this.sidemenu.mode = 'side';
    }
  }

}
