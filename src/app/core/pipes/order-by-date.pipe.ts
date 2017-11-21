import { Pipe, PipeTransform } from '@angular/core';
import { ICourseItem } from '../interfaces/course-item.interface';

@Pipe({
  name: 'orderByDate'
})
export class OrderByDatePipe implements PipeTransform {

  transform(value: ICourseItem[], args?: any): ICourseItem[] {
    return value.sort((a: ICourseItem, b: ICourseItem) => b.creatingDate -a.creatingDate);
  }

}
