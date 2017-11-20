import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input()logoText: string;

  constructor(protected loginService: LoginService) { }

  ngOnInit() {
    this.loginService.readUser();
  }

  onLogoff(e) {
    e.preventDefault();
    this.loginService.logout();
  }

}
