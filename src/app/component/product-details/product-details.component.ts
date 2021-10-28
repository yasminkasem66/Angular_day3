import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/Models/product';
import { Subscription } from 'rxjs/internal/Subscription';
import { ProductsFrmAPIService } from 'src/app/Services/products-frm-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  public sentPrdID: number = 0;
  public senti: number = 0;
  public x: number = 0;
  prd: Product | undefined;
  // public subscribtions : Subscription[] | null=null;
  public subscribtions: Subscription[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productservice: ProductService,
    private productserviceAPI: ProductsFrmAPIService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.x = this.productservice.getCountProducts();
    let subscribtion: Subscription = this.activatedRoute.paramMap.subscribe(
      (paramMap) => {
        //to get parames from id
        this.sentPrdID = Number(paramMap.get('id'));
        this.senti = Number(paramMap.get('items'));
        this.prd = this.productservice.getProductByID(this.sentPrdID);
      },
      (err) => {
        console.log(err);
      }
    );
    this.subscribtions.push(subscribtion);
  }

  ngOnDestroy(): void {
    for (let sub of this.subscribtions) sub.unsubscribe();
  }

  goBack() {
    this.location.back();
  }

  prevProduct() {
    this.router.navigate(['/Product', --this.sentPrdID, --this.senti]);
  }

  nextProduct() {
    this.router.navigate(['/Product', ++this.sentPrdID, ++this.senti]);
  }
}
