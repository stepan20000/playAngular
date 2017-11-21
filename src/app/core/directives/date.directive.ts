import {Directive, ElementRef, Input, OnChanges } from '@angular/core';

const secInDay = 24 * 60 * 60 * 1000;

@Directive({
  selector: '[app-DateDirective]'
})
export class DateDirective implements OnChanges{
  @Input() date: number;

  currentDate: number = Date.now();

  constructor(private el: ElementRef) {
  }

  ngOnChanges() {
    if (this.date < this.currentDate && this.date >= this.currentDate - secInDay * 14) {
      this.el.nativeElement.classList.add('fresh');
    }
    if (this.date > this.currentDate) {
      this.el.nativeElement.classList.add('upcoming');
    }
  }

}
