import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ICourseItem } from '../interfaces/course-item.interface';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


const getCoursesApi = 'http://localhost:1337/courses';
const deleteCourseApi = 'http://localhost:1337/delete-course';
const getCourseApi = 'http://localhost:1337/get-course';
const addCourseApi = 'http://localhost:1337/add-course';
const updateCourseApi = 'http://localhost:1337/add-course';

const defaultCourses = [];

@Injectable()
export class CourseService {

  constructor(private http: HttpClient) {}

  private subject = new BehaviorSubject<ICourseItem[]>(defaultCourses);

  courses$: Observable<ICourseItem[]> = this.subject.asObservable();

  getCourses() {
    this.http.get(getCoursesApi).subscribe((data: Array<ICourseItem>) => this.subject.next(data));
  }

  getCourse(id: number): Observable<ICourseItem> {
    return this.http.get<ICourseItem>(`${getCourseApi}/${id}`);
  }

  createCourse(course: ICourseItem): Observable<ICourseItem[]> {
    return this.http.post<ICourseItem[]>(addCourseApi, course);
  }

  updateCourse(course: ICourseItem): Observable<ICourseItem[]> {
    return this.http.post<ICourseItem[]>(updateCourseApi, course);
  }

  deleteCourse(idForDeleting: number): Observable<ICourseItem[]> {
    return this.http.get<ICourseItem[]>(`${deleteCourseApi}/${idForDeleting}`);
  }

}
