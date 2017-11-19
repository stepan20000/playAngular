import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlsComponent {

  textToFind: string;

  constructor() { }

  onSubmit() {
    console.log('onSubmit Form', this.textToFind);
  }


}
