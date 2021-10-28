import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  isLogged:boolean = false;
  Password: any = '';
  Email: any = '';
  constructor(
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLogged = this.userAuthService.isLogged();
  }


  login() {
    this.userAuthService.login("this.Email", "this.Password");
    // this.router.navigate(['/User/Profile']);
    this.isLogged = true;
  }

  logout() {
    this.userAuthService.logOut();
     this.isLogged = false;
  }
}
