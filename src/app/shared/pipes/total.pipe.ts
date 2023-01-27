import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
// class
export class TotalPipe implements PipeTransform {
  transform(val: number, coef: number, tva?: number): number {
    //console.log('depuis pipe total');
    // cette méthode est déclanchée 2 fois par objet
    if (tva) {
      return val * coef * (1 + tva / 100);
    }
    return val * coef;
  }
}
