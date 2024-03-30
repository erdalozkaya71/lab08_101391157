import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'students',
  standalone: true,
  template: `<h2>{{ getTitle() }} - {{ getCurrentDateString() }}</h2>`,
  providers: [DatePipe],
})
export class StudentsComponent {
  title = 'My List of Students';

  constructor(private datePipe: DatePipe) {}

  getTitle() {
    return this.title;
  }

  getCurrentDate() {
    return new Date();
  }

  getCurrentDateString() {
    return this.datePipe.transform(this.getCurrentDate(), 'fullDate');
  }
}
