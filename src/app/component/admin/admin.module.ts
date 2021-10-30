import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProductComponent } from './new-product/new-product.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
// Product/:id
const routes: Routes = [
  { path: '', redirectTo: '/User/Profile', pathMatch: 'full' }, //Default path ' ';
  {path: 'newproduct',component: NewProductComponent},
  {path: 'editproduct/:id',component: EditProductComponent},
  // { path: 'login', component: UserLoginComponent },
];


@NgModule({
  declarations: [
    NewProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ]
})
export class AdminModule { }
