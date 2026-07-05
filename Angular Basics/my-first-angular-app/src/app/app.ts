import { Component, signal } from '@angular/core';
import { NewComponent } from './new-component/new-component'

@Component({
  selector: 'app-root',
  imports: [NewComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Fundamentals of Angular';
  name = 'Mehdi';
}
