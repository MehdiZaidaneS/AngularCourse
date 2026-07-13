import { DatePipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe1',
  imports: [DatePipe, DecimalPipe, PercentPipe],
  templateUrl: './pipe1.html',
  styleUrl: './pipe1.css',
})
export class Pipe1 {
  today: Date = new Date();
  amount: number = 5365.75;
  percent: number = 0.111;
}
