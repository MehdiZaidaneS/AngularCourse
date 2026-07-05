import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  active = false;

  onButtonClick() {
    this.active = !this.active;
  }
}