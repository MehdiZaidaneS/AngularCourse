import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  color = 'green';
  active = true;

  onButtonClick() {
    this.active = !this.active;
    this.color = this.active ? 'green' : 'red';
  }
}