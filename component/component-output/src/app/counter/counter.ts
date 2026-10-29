import { Component, output, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'counter',
  styleUrl: './counter.css',
  templateUrl: './counter.html',
})
export class Counter {
  count= signal<number>(0);

  counterEmiter=output<number>({alias:"counter"});


  increment(){
    this.count.update(prev=> prev+1);
    this.counterEmiter.emit(this.count());
  }
  
  decrement(){
    this.count.update(prev=> prev-1);
    this.counterEmiter.emit(this.count());
  }
}
