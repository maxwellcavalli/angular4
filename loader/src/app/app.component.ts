import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  data: any;

  constructor(private http: Http){}

  public load(){
    const sampleUrl = 'http://slowwly.robertomurray.co.uk/delay/6000/url/https://jsonplaceholder.typicode.com/posts/1';

    this.http.get(sampleUrl)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        console.log(data);
        
      });
  }
}
