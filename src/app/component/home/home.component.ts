import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  companyName: string = 'ITI';
  logoUrl: string = 'assets/1.jpg';
  service: string[] = ['x', 'y'];

  isServicesHidden: boolean = false;
  userFeedback: string =" ";

  constructor() {}
  ngOnInit(): void {}

  toggleServices() {
    this.isServicesHidden = !this.isServicesHidden;
  }
}



