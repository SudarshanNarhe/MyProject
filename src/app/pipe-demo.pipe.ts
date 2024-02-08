import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeDemo',
  standalone: true
})
export class PipeDemoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split(' ').length;
  }

}
