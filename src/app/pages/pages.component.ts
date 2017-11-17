import { Component, OnInit } from '@angular/core';

import { LoginService } from '..//core/services/login.service';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  isLogined: boolean;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.isLogined = this.loginService.isLogined();
  }

  onLogin() {
    this.isLogined = true;
  }

}

