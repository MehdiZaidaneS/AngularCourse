import { Component, signal } from '@angular/core';
import { List } from './list/list';


@Component({
  selector: 'app-root',
  imports: [List],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
