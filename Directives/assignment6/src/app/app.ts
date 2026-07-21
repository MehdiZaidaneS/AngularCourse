import { Component, signal } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { ButtonColor } from './button-color';

@Component({
  selector: 'app-root',
  imports: [NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    ButtonColor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  value = 'default';

  toggleValue(input: string) {
    this.value = input;
  }
}

