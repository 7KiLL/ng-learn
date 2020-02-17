import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAppStyle]'
})
export class AppStyleDirective {

  constructor(private el: ElementRef, private r: Renderer2) { }

  @HostListener('click', ['$event']) onClick(event: Event) {
    this.r.setStyle(this.el.nativeElement, 'color', 'red');
  }
}
