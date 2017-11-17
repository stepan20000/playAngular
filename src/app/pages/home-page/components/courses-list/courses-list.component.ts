import { Component, OnInit, Input } from '@angular/core';

import { CourseService } from '../../../../core/services/course-service.service';
import { ICourseItem } from '../../../../core/interfaces/course-item.interface';


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses: Array<ICourseItem>;

  isDeleteModalShown: boolean;
  courseForDeleting: ICourseItem;
  deleteModalMessage: string;



  constructor(private courseService: CourseService) {
    this.courses = [];

  }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
    this.hideModal();
  }

  deleteCourse() {
    this.hideModal();
    this.courseService.deleteCourse(this.courseForDeleting);
  }

  showModal(deleteMe?: ICourseItem) {
    if (deleteMe) {
      this.courseForDeleting = deleteMe;
      this.deleteModalMessage = `Are you sure you want to delete the ${this.courseForDeleting.title} ${this.courseForDeleting.id}?`;
    }
    this.isDeleteModalShown = true;
  }

  hideModal() {
    this.isDeleteModalShown = false;
  }

}
