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


  getUser(): void {
    if (this.user)  { return; }
    const savedUser = this.localStorageService.get('user');
    if (savedUser) {
      this.user = savedUser;
    }
  }

  login(username: string, password: string): Observable<IUser> {
    return this.http.post<IUser>(loginApi, {
      username,
      password
    });
  }

  logout() {
    this.user = null;
    this.clearUserFromLocalStorage();
  }

  writeUser(user: IUser) {
    this.user = user;
    this.localStorageService.set('user', user );
  }

  clearUserFromLocalStorage(): void {
    this.localStorageService.remove('user');
  }

  giveUser(): IUser | false {
    if (this.user) { return this.user; }
    return false;
  }
}
