import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductsFrmAPIService } from 'src/app/Services/products-frm-api.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  id: number = 0;

  prd!: Product;
  // constructor
  constructor(
    private activatedRoute: ActivatedRoute,
    private productserviceAPI: ProductsFrmAPIService,
    private router: Router
  ) {
    this.prd = {
      id: 0,
      Name: '',
      Price: 0,
      Quantity: 0,
      imgURL: './assets/1(14).jpg',
      Categoryid: 1,
    };
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id = Number(paramMap.get('id'));
    });
  }

  // GEtID() {
  //   this.router.navigate(['/Product', --this.sentPrdID, --this.senti]);
  // }

  EditProduct(EditProduct: number, prd: Product) {
    this.productserviceAPI.EditProduct(EditProduct,prd).subscribe(
      (res) => {
        // return this.router.navigateByUrl('/Admin/newproduct');
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/Admin/newproduct']);

        // window.location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
