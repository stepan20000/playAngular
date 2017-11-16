import { Injectable } from '@angular/core';

import { ICourseItem } from '../interfaces/course-item.interface';
import { courses } from '../mock-courses';

@Injectable()
export class CourseService {
  courses: ICourseItem[];

  constructor() {
    this.courses = courses;
  }

  getCourses(): Array<ICourseItem> {
    return this.courses;
  }

  deleteCourse(courseForDeleting: ICourseItem) {
    const index = this.courses.indexOf(courseForDeleting);
    if (index > -1) {
      this.courses.splice(index, 1);
    }
  }

}
