import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rand-button',
  imports: [NgIf],
  templateUrl: './rand-button.html',
  styleUrl: './rand-button.css',
})
export class RandButton {

  value= false;
  number = 0;

  handleOnClick(){
    this.value= true;
    this.number = Math.floor(Math.random() * 100) + 1;
  }
}
