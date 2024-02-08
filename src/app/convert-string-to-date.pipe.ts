import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertStringToDate',
  standalone: true
})
export class ConvertStringToDatePipe implements PipeTransform {

  transform(dateString: string): Date {
    const date = new Date(dateString);
    return date;
  }
}
