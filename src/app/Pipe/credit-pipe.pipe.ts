import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditPipe',
})
export class CreditPipePipe implements PipeTransform {
  transform(ID: number): any {
  var x=Array.from(ID.toString()).map(Number);
   var part = x.slice(0,4);
   var part1=part.join("").toString()

   var partI = x.slice(4,8);
   var partI2=partI.join("").toString()

   var PartII = x.slice(8,12);
   var PartII3=PartII.join("").toString()

   var PartIII = x.slice(12,16);
   var PartIII4=PartIII.join("").toString()

   var total = part1+"-"+partI2+"-"+PartII3+"-"+PartIII4
    
  //  var str: string = ''; 
  //   for (let i = 0; i <4; i++) {
  //     let part = x.slice(0, 4);
  //     var part1 = part.join('').toString();
      
  //     str += `${part1}-`;
       
  //   }
  //     return str;
    return total;
 
  
  }
}
