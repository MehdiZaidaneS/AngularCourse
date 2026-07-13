import { Component, signal } from '@angular/core';
import { TextColor } from './text-color';
import { FontSize } from './font-size';

@Component({
  selector: 'app-root',
  imports: [TextColor, FontSize],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
