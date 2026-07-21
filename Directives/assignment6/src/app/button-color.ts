import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonColor]',
})
export class ButtonColor {
  private active = false;

  constructor( private element: ElementRef,private renderer: Renderer2) {}

  @HostListener('click')
  onClick() {
    this.active = !this.active;

    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      this.active ? 'lightgreen' : 'white'
    );
  }
}