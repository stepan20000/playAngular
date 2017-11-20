import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { ICourseItem } from '../../../../../../core/interfaces/course-item.interface';
import { DateDirective } from '../../../../../../core/directives/date.directive';


@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
  @Input() course: ICourseItem;
  @Output() deleteCourse = new EventEmitter();

  onDeleteCourse() {
    this.deleteCourse.emit(this.course);
  }

}



