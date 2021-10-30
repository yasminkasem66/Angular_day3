import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { Product } from 'src/app/Models/product';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { ProductsFrmAPIService } from 'src/app/Services/products-frm-api.service';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {
  // id: number = 0;
  // Name: string = 'New Product';
  // Price: number = 100;
  // Quantity: number = 10;
  // imgURL: string = 'New Product';
  // Categoryid: number = 1;
  prd!: Product;
  prdListForSelCat: Product[] = [];

  catList: Category[] = [];

  constructor(
    private productserviceAPI: ProductsFrmAPIService,
    private categoriesserviceAPI: CategoryService,
    private router: Router
  ) {
    this.prd = { id: 0, Name: 'this.Name', Price: 0, Quantity: 0, imgURL: './assets/1(14).jpg', Categoryid: 1 };
    


// get all product
    this.productserviceAPI.getAllProducts().subscribe(
      (productList) => {
        this.prdListForSelCat = productList;
      },
      (err) => {
        console.log(err);
      }
    );

    // get categories from
        this.categoriesserviceAPI.getAllCategories().subscribe(
          (catListAPI) => {
            this.catList = catListAPI;
          },
          (err) => {
            console.log(err);
          }
        );
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  AddProduct() {
    // const prd: Product = {
    //   id: this.id,
    //   Name: this.Name,
    //   Price: this.Price,
    //   Quantity: this.Quantity,
    //   imgURL: (this.imgURL = './assets/1(14).jpg'),
    //   Categoryid: this.Categoryid,
    // };
    this.productserviceAPI.addProduct(this.prd).subscribe(
      (res) => {
        return this.router.navigateByUrl('/Products');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  EditProduct() {}

  DeleteProduct(DeleteProduct: number) {
    this.productserviceAPI.DeleteProduct(DeleteProduct).subscribe(
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
