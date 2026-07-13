import { Component, signal } from '@angular/core';
import { Pipe1 } from './pipe1/pipe1';
import { Jsonpipe } from './jsonpipe/jsonpipe';



@Component({
  selector: 'app-root',
  imports: [Pipe1, Jsonpipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
