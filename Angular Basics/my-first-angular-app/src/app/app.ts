import { Component, signal } from '@angular/core';
import { NewComponent } from './new-component/new-component'
import {DataComponent} from "./data-component/data-component"

@Component({
  selector: 'app-root',
  imports: [NewComponent, DataComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Fundamentals of Angular';
  name = 'Mehdi';
  yesterdayWeather = 'Yesterday: 19°C, Cloudy';
}
