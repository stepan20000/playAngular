import { Pipe, PipeTransform } from '@angular/core';
import { ICourseItem } from '../interfaces/course-item.interface';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ICourseItem[], args?: string): ICourseItem[] {
    console.log(typeof args[0], args[0]);
    if (!args[0]) { return value; }
    return value.filter((param: ICourseItem) => param.title.includes(args[0]));
  }

}
