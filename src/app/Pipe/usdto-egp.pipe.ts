import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSDtoEGP'
})
  
  
export class USDtoEGPPipe implements PipeTransform {

  transform(value: number, currencyRate: number=15): number {
    return value * currencyRate;
  }

}
