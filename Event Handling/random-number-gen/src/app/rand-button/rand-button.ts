import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rand-button',
  imports: [NgIf, FormsModule],
  templateUrl: './rand-button.html',
  styleUrl: './rand-button.css',
})
export class RandButton {

  value= false;
  number = 0;
  sum = 0;

  handleOnClick(add: string){
    const inputNumber = Number(add) || 0;
    this.number = Math.floor(Math.random() * 100) + 1;
    this.sum = this.number + inputNumber;
    this.value= true;
  }
}
