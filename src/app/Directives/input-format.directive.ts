import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[InputFormat]',
})
export class InputFormatDirective {

  constructor(private ref:ElementRef) {}

  @Input('format') format: string ='A ';
  //to make the function listen to the changes
  @HostListener('focus') onfocus() {
    console.log("focus");
    
  }

  @HostListener('blur') onblur() {
    let getvalue: string = this.ref.nativeElement.value;
    if (this.format === 'A') {  
    this.ref.nativeElement.value = getvalue.toLocaleUpperCase();
    }
    if (this.format === 'a') {  
    this.ref.nativeElement.value = getvalue.toLowerCase();
    } else {
      
    this.ref.nativeElement.value = getvalue.toLocaleUpperCase();
    }
  }
}
