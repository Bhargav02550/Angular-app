import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  //Decorate component
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular-app';
  //string interpolation
  name: string = 'Bhargav';
  cse = {
    fname: 'Bhargav',
    lname: 'Pavan',
  };
  csecolor: string = 'plum';
  csestyle: object = {
    color: 'white',
    backgroundColor: 'purple',
    border: '5px solid violet',
  };
  rating: number = 3;
  check: boolean = true;
  cses: boolean = true;
  c1apply: boolean = true;
  c2apply: boolean = true;
  path: string = './assets/img.png';
  styles: string = 'boxc';
  names: string = 'Pavan';
  msg: string = '';
  rocks() {
    this.names = 'Kumar';
  }
  disp() {
    alert('Clicked on button');
  }
  click() {
    // console.log('Welcome to event binding');
    this.msg = 'Welcome to event binding';
  }
}
