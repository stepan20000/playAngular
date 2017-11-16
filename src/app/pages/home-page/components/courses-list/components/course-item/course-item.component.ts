import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ICourseItem } from '../../../../../../core/interfaces/course-item.interface';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent {
  @Input() course: ICourseItem;

  getDuration(): string {
    let hours, minutes;
    const t = this.course.duration;
    hours = Math.floor(t / 60);
    minutes = t - hours * 60;
    return `${hours > 0 ? hours + 'h' : ''} ${minutes}min`;
  }


}



