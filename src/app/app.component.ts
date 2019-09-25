import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
env=environment;
  constructor() {
    console.log(this.env.name);
    console.log(this.env.production);

  

    
  }
  title = 'app works!';
}