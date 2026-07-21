import { Component, signal } from '@angular/core';
import { Image } from './image/image';


@Component({
  selector: 'app-root',
  imports: [Image],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
