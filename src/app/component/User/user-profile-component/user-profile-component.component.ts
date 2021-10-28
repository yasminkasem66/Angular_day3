import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile-component.component.html',
  styleUrls: ['./user-profile-component.component.scss'],
})
export class UserProfileComponentComponent implements OnInit {
  isLogged: boolean = false;

  constructor(
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLogged = this.userAuthService.isLogged();
  }

  logout() {
    this.userAuthService.logOut();
    //  this.router.navigate(['/User/login']);
    this.router.navigate(['']);
  }
}
