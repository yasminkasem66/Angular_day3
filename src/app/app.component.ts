import { Component } from '@angular/core';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],


  // template: '<h1>Hello world!</h1>',
  // styles:['h1 {color:red}']
})
  
  
export class AppComponent {
  title = 'lecture2';
  constructor() {
    
  }

  sayHelleo() {
    return ` hello from + ${this.title}`;
  }
}


//inside html he always see an object from the component