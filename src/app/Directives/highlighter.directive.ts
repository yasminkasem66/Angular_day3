import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  //class decorator
  selector: '[appHighlighter]',
})
export class HighlighterDirective implements OnChanges {
  // constructor(elemRef: ElementRef) { //parameter for the the class to make it a member put an access modifier before it and use this with it
  //   elemRef.nativeElement.style.borderRadius = "50%";
  // }

  //we cant make event binding cuz it's not in our class so here is the rule of the decorator listener
  //there is no elemet to make binding over it

  @Input('appHighlighter') highLightColor: string = 'green';
  // @Input() highLightColor: string = '';
  @Input() Defaultcolor: string = ' gray';

  constructor(private elemRef: ElementRef) {
        console.log("constr "+this.highLightColor);
        console.log('constr ' + this.Defaultcolor);
    this.elemRef.nativeElement.style.borderRadius = '50%';
    this.elemRef.nativeElement.style.border = '1px blue solid';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('out ' + this.highLightColor);
    console.log('out ' + this.Defaultcolor);
    
  }

  @HostListener('mouseenter') onMouseOver() {
    //method decorator
    this.elemRef.nativeElement.style.borderRadius = '0';
    this.elemRef.nativeElement.style.borderColor = this.highLightColor;
    // this.elemRef.nativeElement.style.borderColor = this.Defaultcolor;
  }
  @HostListener('mouseleave') onMouseOut() {
    this.elemRef.nativeElement.style.borderRadius = '50%';
    this.elemRef.nativeElement.style.border = '1px  red solid';
  }
}
