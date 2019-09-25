import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public counter:number=0;
  public nombre:string='por defecto';
  constructor() { }

  ngOnInit() {

  }
  increment():void{
    this.counter++
  }
  decrement():void{
    this.counter--
  }
}
