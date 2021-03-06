import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  @Input() username: string;
  @Input() password: string;


  constructor(private loginService: LoginService) { }

  onSubmit(): void {
    this.loginService.login(this.username, this.password);
  }

}
