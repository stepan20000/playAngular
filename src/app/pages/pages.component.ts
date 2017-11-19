import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { LoginService } from '..//core/services/login.service';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagesComponent implements OnInit {

  constructor(protected loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getUser();
  }

  onLogin(e) {
    console.log(e);
  }

}

