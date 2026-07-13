import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextColor]',
  standalone: true,
})
export class TextColor {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  @Input()
  set appTextColor(color: string) {
    this.renderer.setStyle(this.element.nativeElement,'color',color);
  }
}