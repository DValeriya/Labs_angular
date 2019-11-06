import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {
  @Input('appMyDirective') size;

  constructor(private el: ElementRef) {}
    
     @HostListener('mouseenter') onMouseIn() {
       this.setFontSize(this.size);
     }
    
     @HostListener('mouseleave') onMouseOut() {
       this.setFontSize(14);
     }
    
     setFontSize(value: number): void {
       this.el.nativeElement.style.fontSize = `${value}px`;
     }


}
