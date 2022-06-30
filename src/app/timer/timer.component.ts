import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  @Output() itemEmitter = new EventEmitter<any>();
  showButton: boolean = false;
  interval: any;
  timeLeft: number = 5;
  timeToPass: number = 5;
  constructor() {}

  ngOnInit() {
    this.startTimer();
  }
  startTimer() {
    this.showButton = false;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.showButton = true;
        clearInterval(this.interval);
      }
    }, 1000);
  }

  passTurn() {
    this.itemEmitter.emit();
    this.timeLeft = this.timeToPass;
    this.showButton = false;
    this.startTimer();
  }
}
