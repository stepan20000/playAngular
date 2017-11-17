import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ICourseItem } from '../interfaces/course-item.interface';
import { courses } from '../mock-courses';
import {Observable} from 'rxjs/Observable';

const getCoursesApi = 'http://localhost:1337/courses';
const deleteCourseApi = 'http://localhost:1337/delete-course';

@Injectable()
export class CourseService {
  courses: ICourseItem[];

  constructor(private http: HttpClient) {
    this.courses = courses;
  }

  getCourses(): Observable<ICourseItem[]> {
    return this.http.get<ICourseItem[]>(getCoursesApi);
  }

  deleteCourse(idForDeleting: number): Observable<ICourseItem[]> {
    return this.http.get<ICourseItem[]>(`${deleteCourseApi}/${idForDeleting}`);
  }

}
