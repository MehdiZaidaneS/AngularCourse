import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [NgFor],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
    items: string[] = ['Finland', 'Sweden', 'Estonia', 'Spain', 'Japan'];

}
