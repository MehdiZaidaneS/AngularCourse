import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  imports: [NgIf],
  templateUrl: './image.html',
  styleUrl: './image.css',
})
export class Image {

  active: boolean = false;

  toggleImage() {
    this.active = !this.active;
  }

}
