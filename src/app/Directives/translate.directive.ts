import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTranslate]',
})
export class TranslateDirective {
  // @Input() Defaultcolor: string = ' gray';
  @Input('appTranslate') borderColor: string = 'green';

  constructor(private elemRef: ElementRef) {
    this.elemRef.nativeElement.style.transform = 'scale(1)';
  }

  @HostListener('mouseenter') onMouseOver() {
    this.elemRef.nativeElement.style.transform = 'scale(1.03)';
    this.elemRef.nativeElement.style.boxShadow =
      '1px 1px 5px 0px #d8d7d7 ,-1px -1px 5px 0px #d8d7d7';
    // this.elemRef.nativeElement.style.borderRadius = '50%';
    this.elemRef.nativeElement.style.background = this.borderColor;
  }
  @HostListener('mouseleave') onMouseOut() {
    this.elemRef.nativeElement.style.transform = 'scale(1)';
    this.elemRef.nativeElement.style.boxShadow = 'none';
    this.elemRef.nativeElement.style.background = '#fff';
  }
}
