import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import { HighlighterDirective } from './Directives/highlighter.directive';
import { Product2Component } from './component/product2/product2.component';
import { USDtoEGPPipe } from './Pipe/usdto-egp.pipe';
import { CartparentComponent } from './sharingDate/cartparent/cartparent.component';
import { CartchildComponent } from './sharingDate/cartchild/cartchild.component';
import { CreditPipePipe } from './Pipe/credit-pipe.pipe';
import { NationalidPipe } from './Pipe/nationalid.pipe';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { TranslateDirective } from './Directives/translate.directive';
import { OrderMasterComponent } from './component/Order/order-master/order-master.component';
import { OrderDetailComponent } from './component/Order/order-detail/order-detail.component';
import { NotFoundPageComponent } from './component/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ShoppingCartItemsComponent } from './component/Order/shopping-cart-items/shopping-cart-items.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './component/Order/order-master/modal-basic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PanelComponent } from './component/panel/panel.component';
import { HttpClientModule } from '@angular/common/http';
import { InputFormatDirective } from './Directives/input-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    HighlighterDirective,
    Product2Component,
    USDtoEGPPipe,
    CartparentComponent,
    CartchildComponent,
    CreditPipePipe,
    NationalidPipe,
    AboutUsComponent,
    ContactUsComponent,
    TranslateDirective,
    OrderMasterComponent,
    OrderDetailComponent,
    NotFoundPageComponent,
    ProductDetailsComponent,
    ShoppingCartItemsComponent,
    NgbdModalBasic,
    PanelComponent,
    InputFormatDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //////////////////create app routing and add it in app module//once app module open the routing also load  //I can change this name
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
