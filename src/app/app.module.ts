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
    CartchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
