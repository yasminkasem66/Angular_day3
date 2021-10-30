import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { Storeinfo } from '../../shared/Storeinfo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // info: Storeinfo;
  info: Storeinfo = {
    name: 'ITI',
    logo: 'assets/1.jpg',
    services: ['Marketing', 'Sales'],
  };

  isLogged: boolean = false;
  constructor(private userAuthService: UserAuthService) {
    // this.info = new Storeinfo('ITI', 'assets/1.jpg', ['Marketing', 'Sales']);
  }

  ngOnInit(): void {
  
    // this.isLogged = this.userAuthService.isLogged();
    // it will execute one time


    //everytime the status change the subscribe feels and notify the isLogged property
    //subject behavior  emmit every time the subject change its status
    //anyone wants to know if there is login or log out he knows from the subject
    this.userAuthService.isLoggedSubject().subscribe(
      (loggedStatus) => this.isLogged = loggedStatus
    )

  }
}
