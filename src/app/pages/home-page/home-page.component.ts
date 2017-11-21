import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
  filter = '';
  constructor() { }

  ngOnInit() {
  }

  onFilter(str: string) {
    console.log('onFilter', str);
    this.filter = str;
  }

  onResetFilter() {
    this.filter = '';
  }

}
