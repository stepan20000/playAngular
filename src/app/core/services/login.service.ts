import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { IUser } from '../interfaces/user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';



const loginApi = 'http://localhost:1337/login';

@Injectable()
export class LoginService {
  user;

  constructor(private localStorageService: LocalStorageService, private http: HttpClient) {

  }

  isLogined(): boolean {
    this.getUser();
    if (this.user) {
      return this.user.isLogined;
    }
    return false;
  }

  getUser(): void {
    if (this.user)  { return; }
    const savedUser = this.localStorageService.get('user');
    if (savedUser) {
      this.user = savedUser;
    }
    // console.log('this.user.isLogined getUser', this.user.isLogined);
  }

  login(username: string, password: string): Observable<IUser> {
    console.log('service login', username, password);
    console.log('this.http', this.http);
    return this.http.post<IUser>(loginApi, {
      username,
      password
    });
  }

  logout() {

  }

  writeUser(user: IUser) {
    this.user = user;
    this.localStorageService.set('user', user );
  }
}
