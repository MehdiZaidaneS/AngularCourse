import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-component',
  imports: [],
  templateUrl: './data-component.html',
  styleUrl: './data-component.css',
})

export class DataComponent {
  @Input() data: string = ''
}
