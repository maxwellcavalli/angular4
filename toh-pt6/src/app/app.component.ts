import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

    <mx-header> TESTE </mx-header>
    <mx-clock-picker> </mx-clock-picker>


    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
