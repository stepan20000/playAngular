import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { IUser } from '../interfaces/user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



const loginApi = 'http://localhost:1337/login';

const defaultUser: IUser = {
  name: 'Default User',
  isLogined: false
};

@Injectable()
export class LoginService {

  constructor(private localStorageService: LocalStorageService, private http: HttpClient) {}

  private subject = new BehaviorSubject<IUser>(defaultUser);

  user$: Observable<IUser> = this.subject.asObservable();

  login(username: string, password: string) {
    this.http.post(loginApi, {
      username,
      password})
      .subscribe((data: IUser) => {
        this.subject.next(data);
        this.localStorageService.set('user', data);
    });
  }

  logout() {
    this.subject.next(defaultUser);
    this.localStorageService.remove('user');
  }

  readUser(): void {
    this.localStorageService.get('user')
    ? this.subject.next(this.localStorageService.get('user'))
    : this.subject.next(defaultUser);
  }

}
