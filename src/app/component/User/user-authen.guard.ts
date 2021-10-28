import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
  
  
export class UserAuthenGuard implements CanActivate {
// constructor
  constructor(private userAuthService: UserAuthService, private router:Router) {
    
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  
  {
    if (this.userAuthService.isLogged()) {
      return true;
    } else {
      alert("you are not user , please login")
      this.router.navigate(['/User/login']);
      return false;
    }
  }
  
}
