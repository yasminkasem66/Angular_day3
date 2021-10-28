import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalid',
})
export class NationalidPipe implements PipeTransform {

  transform(NID: number, type: string): any {
     var x = Array.from(NID.toString()).map(Number);
     var month = x.slice(3, 5);
     var month1 = month.join('').toString();
     var year = x.slice(1, 3);
     var year1 = year.join('').toString();
     var day = x.slice(5, 7);
     var day1 = day.join('').toString();
     switch (type) {
       case 'YY':
         return 19 + year1;

         break;
       case 'MM':
         return month1;

         break;
       case 'DD':
         return day1;
         break;
       case 'FullDate':
         return day1 + '-' + month1 + '-' + 19 + year1;
         break;
     }
  }
}
