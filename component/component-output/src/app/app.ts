import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports:[Counter]

})
export class App {
   count:number=0;

   handleCount(value:number){
    this.count=value;
   }
}
