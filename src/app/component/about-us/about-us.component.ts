import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  courses = [
     { 'id': 1, 'coursename': 'java' },
    {'id':2,'coursename':'java1'},
    {'id':3,'coursename':'java2'},
    {'id':3,'coursename':'java3'},
  ];
    

  // with every item we create a new object and to avoid that use track by
  trackByCourse(index:any, course:any) {
  return course?course.id: undefined;
}
  constructor() {}

  ADD() {
    this.courses.unshift({ id: 3, coursename: 'java3' });
  }
  Remove(c: any) {
    let i = this.courses.indexOf(c);
    this.courses.splice(i, 1);
  }
  ngOnInit(): void {}
}
