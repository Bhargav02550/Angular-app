import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CsepipePipe } from './csepipe.pipe';

@Component({
  //Decorate component
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CsepipePipe,
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular-app';
  // string interpolation
  name: string = 'Bhargav Pavan';
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
  // msg: string = '';
  rocks() {
    this.names = 'Kumar';
  }
  disp() {
    alert('Clicked on button');
  }
  // click(event: any) {
  //   // console.log('Welcome to event binding');
  //   console.log(event.type);
  //   this.msg = 'Welcome to event binding';
  // }
  csemsg: string = 'Bhargav';
  cserocks(event: any) {
    console.log('Event happened');
    this.csemsg = (<HTMLInputElement>event.target).value;
  }
  csemsgs(event: any) {
    this.csemsg = (<HTMLTextAreaElement>event.target).value;
  }
  show: boolean = true;
  csevalue: string = 'Mean Stack';
  users = [
    {
      name: 'Bhargav',
      branch: 'CSE',
      city: 'KKD',
    },
    {
      name: 'Surya',
      branch: 'ECE',
      city: 'Mandya',
    },
    {
      name: 'Pavan',
      branch: 'CSE',
      city: 'Gulbarga',
    },
    {
      name: 'Sunil',
      branch: 'IT',
      city: 'Tumkur',
    },
    {
      name: 'Kumar',
      branch: 'EEE',
      city: 'Mangaluru',
    },
  ];
  itsme = 3;
  ope: string = '+';
  n1: number = 10;
  n2: number = 20;
  cseb: string = '';
  csedate: Date = new Date();
  data: object = {
    name: 'Bhargav',
    branch: 'CSE',
    city: 'KKD',
  };
  courses = ['C', 'CPP', 'JAVA', 'PYTHON', 'DART', 'JAVASCRIPT'];
  pebs: string = 'Welcome to Buildin Pipes';
  
}
