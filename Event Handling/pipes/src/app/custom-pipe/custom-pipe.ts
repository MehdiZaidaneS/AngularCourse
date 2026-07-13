import { Component } from '@angular/core';
import { ReversepipePipe } from '../reversepipe-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-pipe',
  imports: [ReversepipePipe, FormsModule],
  templateUrl: './custom-pipe.html',
  styleUrl: './custom-pipe.css',
})
export class CustomPipe {
  inputValue: string = "";

  handleOnClick(value: string){
    this.inputValue = value;
  }
}
