import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mx-header>Such Header</mx-header>

    <mx-accordion [itens]="menu"></mx-accordion>
  `,
  styles: [`

  `]
})
export class AppComponent {
  title = 'app';

  menu = [
    {
      label: 'MENU 1',
      children: [
        {
          label: 'MENU 1.1',
          url: '#menu11'
        },
        {
          label: 'MENU 1.2',
          url: '#menu12'
        },
        {
          label: 'MENU 1.3',
          url: '#menu13'
        },
        {
          label: 'MENU 1.4',
          children: [
            {
              label: 'MENU 1.4.1',
              url: '#menu141'
            },
            {
              label: 'MENU 1.4.2',
              url: '#menu142'
            },
            {
              label: 'MENU 1.4.3',
              url: '#menu143'
            },
            {
              label: 'MENU 1.4.4',
              children: [
                {
                  label: 'MENU 1.4.4.1',
                  url: '#menu1441'
                },
                {
                  label: 'MENU 1.4.4.2',
                  url: '#menu1442'
                },
                {
                  label: 'MENU 1.4.4.3',
                  children:[
                    {
                      label: 'MENU 1.4.4.3.1',
                      url: '#menu14431'
                    }

                  ]

                },

                
              ]
            }
          ]
        },

        {
          label: 'MENU 1.5',
          children: [
            {
              label: 'MENU 1.5.1',
              url: '#menu151'
            },
          ]
        }

      ]
    },

    {
      label: 'MENU 2',
      children: [
        {
          label: 'MENU 2.2',
          url: '#menu21'
        }
      ]
 
    }

  ]

  constructor(){


  }

  private createMenu(label: String, url: String) {
    
  }


}
