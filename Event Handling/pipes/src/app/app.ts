import { Component, signal } from '@angular/core';
import { Pipe1 } from './pipe1/pipe1';



@Component({
  selector: 'app-root',
  imports: [Pipe1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
