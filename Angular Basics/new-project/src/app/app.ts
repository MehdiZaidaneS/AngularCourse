import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [NgIf, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  active = false;
  message: string = '';

  onButtonClick() {
    this.active = !this.active;
  }
}