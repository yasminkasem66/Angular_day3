import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponentComponent } from './user-profile-component/user-profile-component.component';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthenGuard } from './user-authen.guard';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  { path: '', redirectTo: '/User/Profile', pathMatch: 'full' }, //Default path ' ';
  {
    path: 'Profile',
    component: UserProfileComponentComponent,
    canActivate: [UserAuthenGuard],
  },
  // array cuz we can  iimplement many guards if
  { path: 'login', component: UserLoginComponent },
  { path: 'logout', component: UserLoginComponent },
];

@NgModule({
  declarations: [UserLoginComponent, UserProfileComponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbModule,
    
  ],
})
export class UserModule {}
