import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jsonpipe',
  imports: [JsonPipe],
  templateUrl: './jsonpipe.html',
  styleUrl: './jsonpipe.css',
})
export class Jsonpipe {
  testObject = { name: 'Sam', age: 51, job: 'Teacher' };
}
