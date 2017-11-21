import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlsComponent {
  @Output() filter = new EventEmitter();
  @Output() resetFilter = new EventEmitter();
  textToFind: string;

  constructor() { }

  onSubmit(e) {
    this.filter.emit(this.textToFind);
  }

  onReset() {
    this.resetFilter.emit();
  }
}
