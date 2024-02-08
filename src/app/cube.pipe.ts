import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cube',
  standalone: true
})
export class CubePipe implements PipeTransform {

  transform(base: number, expo: number): number {
    let cube=1;
    for(let i=1;i<=expo;i++){
      cube=cube*base;
    }
    return cube;
  }

}
