import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundPageComponent } from './component/not-found-page/not-found-page.component';
import { OrderDetailComponent } from './component/Order/order-detail/order-detail.component';
import { OrderMasterComponent } from './component/Order/order-master/order-master.component';
import { ShoppingCartItemsComponent } from './component/Order/shopping-cart-items/shopping-cart-items.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' }, //Default path ' ';
  { path: 'Home', component: HomeComponent },
  { path: 'Order', component: OrderDetailComponent },
  { path: 'Cart', component: ShoppingCartItemsComponent },
  { path: 'Products', component: OrderMasterComponent },

  { path: 'Product/:id/:items', component: ProductDetailsComponent },

  { path: 'contactUs', component: ContactUsComponent },
  { path: 'AboutUs', component: AboutUsComponent },

  // user module
  {
    path: 'User',
    loadChildren: () =>
      import('./component/User/user.module').then((m) => m.UserModule),
  },


  { path: '**', component: NotFoundPageComponent }, //wild cart if u check the whole path and u didnt find the route use this one
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] //I cant change this name its build in in angular
})
export class AppRoutingModule { }
