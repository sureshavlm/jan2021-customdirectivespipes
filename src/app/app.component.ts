import { Component, HostListener } from '@angular/core';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'directives-demo';
  price: Number;
  dob:Date;
  person: any;
  students: any;

  constructor() {
    this.dob = new Date();
    this.price = 100000;
    this.person = { "firstName": "Ram", "lastName": "Kumar" };

    this.students = [
      { name: "Kumar", age: 19, grade: "A"},
      { name: "Akshith", age: 17, grade: "B"},
      { name: "Manasa", age: 18, grade: "A"},
      { name: "Pavan", age: 20, grade: "C"}
      ];

  }


  @HostListener('window:keyup', ['$event'])
  myKeyBoardEventHanlder(event:KeyboardEvent) {

  	if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      alert('You are typing something!');
    }
  }

  flag:Boolean;

  products: any[]; //by default undefined

  toggle() {
  	this.flag = !this.flag;
  }

  add() {
  	this.products = ['iPhone 10', 'HP Monitor', 'D-Link'];
  }
}
