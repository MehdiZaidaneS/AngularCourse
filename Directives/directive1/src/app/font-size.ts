import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontSize]',
})
export class FontSize {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  @Input()
  set appFontSize(size: string) {
    this.renderer.setStyle(this.element.nativeElement,'font-size',size);
  }
}
