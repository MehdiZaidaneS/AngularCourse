import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './switch.html',
  styleUrl: './switch.css',
})
export class Switch {
  value: string = "default";

  toggleValue(input: string) {
    this.value = input;
  }
}
