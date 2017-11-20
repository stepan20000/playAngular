import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getDuration'
})
export class GetDurationPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let hours, minutes;
    hours = Math.floor(value / 60);
    minutes = value - hours * 60;
    return `${hours > 0 ? hours + 'h' : ''} ${minutes}min`;
  }
}
