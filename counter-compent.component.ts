import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { ExecException } from 'child_process';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-counter-compent',
  templateUrl: './counter-compent.component.html',
  styleUrls: ['./counter-compent.component.css']
})
export class CounterCompentComponent implements OnInit {
 
/*******/
  @Input() message = "message";
  @Output() tick = new EventEmitter<any>();
  intervalInput = 0;

  constructor() { }

  ngOnInit(): void {

  
  }

  setIntervallValue() {
    setInterval(
      () =>{ this.tick.emit({
        message: this.message,
        intervalInput: this.intervalInput,
      })
    console.log(this.message)
    }
       ,
      this.intervalInput
    );
  }
  

}
