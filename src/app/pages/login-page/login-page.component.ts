import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  @Input() username: string;
  @Input() password: string;
  @Output() login = new EventEmitter();

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.loginService.login(this.username, this.password).subscribe(user => {
      this.loginService.writeUser(user);
      this.login.emit(user);
    });
  }

}
