import { Component, signal } from '@angular/core';
import { Switch } from './switch/switch';


@Component({
  selector: 'app-root',
  imports: [Switch],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
