import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { CourseService } from '../../../../core/services/course-service.service';
import { ICourseItem } from '../../../../core/interfaces/course-item.interface';


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent  {
  @Input() filterStr: string;
  courses: Array<ICourseItem>;

  isDeleteModalShown: boolean;
  courseForDeleting: ICourseItem;
  deleteModalMessage: string;



  constructor(protected courseService: CourseService)  {
    this.courseService.getCourses();
  }

  deleteCourse() {
    this.hideModal();
    this.courseService.deleteCourse(this.courseForDeleting.id);
  }

  showModal(deleteMe?: ICourseItem) {
    if (deleteMe) {
      this.courseForDeleting = deleteMe;
      this.deleteModalMessage = `Do you really want to delete the ${this.courseForDeleting.title} ${this.courseForDeleting.id}?`;
    }
    this.isDeleteModalShown = true;
  }

  hideModal() {
    this.isDeleteModalShown = false;
  }

  showMeCourses() {
    console.log('show me courses', this.courses);
  }

}
