import { Component, signal } from '@angular/core';
import { RandButton } from './rand-button/rand-button';


@Component({
  selector: 'app-root',
  imports: [RandButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
