import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() message: string;
  @Input() showMe: boolean;
  @Output() hideModal = new EventEmitter();
  @Output() agree = new EventEmitter();


  constructor() {  }

  emitAgree() {
    this.agree.emit();
  }

  emitHideModal() {
    this.hideModal.emit();
  }

}
