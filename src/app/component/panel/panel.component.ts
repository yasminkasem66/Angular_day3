import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  //1
  courses = [
    { id: 1, coursename: 'java' },
    { id: 2, coursename: 'java1' },
    { id: 3, coursename: 'java2' },
    { id: 3, coursename: 'java3' },
  ];
  count: number = 0;
  //3
  defautView = 'certificates';

  //4444
  isFavorite: boolean = false;

  ////
  white: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  ADD() {
    if (this.count < this.courses.length) {
      this.courses.push(this.courses[this.count]);
      this.count++;
    }
    if (this.count >= this.courses.length) {
      this.count = 0;
    }
  }

  // ADD() {
  //   this.courses.unshift({ id: 3, coursename: 'java3' });
  // }
  Remove(c: any) {
    let i = this.courses.indexOf(c);
    this.courses.splice(i, 1);
  }

  // with every item we create a new object and to avoid that use track by
  trackByCourse(index: any, course: any) {
    return course ? course.id : undefined;
  }

  // ng switch //3333333333333
  setView(sntdefautView: string) {
    this.defautView = sntdefautView;
  }
  //like//44444444444444444444444444444

  onFavoriteClick() {
    this.isFavorite = !this.isFavorite;
  }

  //555555555555555555
  switchColor() {
     this.white = !this.white;
  }
}
