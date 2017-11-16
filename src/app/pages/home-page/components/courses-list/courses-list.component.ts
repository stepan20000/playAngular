import { Component, OnInit } from '@angular/core';

import { CourseService } from '../../../../core/services/course-service.service';
import { ICourseItem } from '../../../../core/interfaces/course-item.interface';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses: Array<ICourseItem>;

  constructor(private courseService: CourseService) {
    this.courses = [];

  }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

}
