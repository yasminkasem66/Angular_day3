import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ShoppingCartItems } from 'src/app/Models/shopping-cart-items';
import { ProductService } from 'src/app/Services/product.service';
import { ProductsFrmAPIService } from 'src/app/Services/products-frm-api.service';

import { Storeinfo } from 'src/app/shared/Storeinfo';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit, OnChanges {
  info: Storeinfo = {
    name: 'ITI',
    logo: 'assets/1.jpg',
    services: ['Marketing', 'Sales'],
  };
  clientName: string = '';
  // IsPurshased: boolean = false;

  // @Input() selectedCategoryChild: number = 0;

  // /////////////////////////////
  prdList: Product[] = [];
  totalOrderPrice: number = 0;
  numberProducts: number = 0;
  totalOrderPricetax: number = 0;
  prdListForSelCat: Product[] = [];

  @Input() sentCatIDFrmMas: number = 0;

  @Output() totalPriceChanged: EventEmitter<number> =
    new EventEmitter<number>(); //make an object from event emiter and emit fire it

  @Output() addItemToCartItems: EventEmitter<ShoppingCartItems> =
    new EventEmitter<ShoppingCartItems>(); //make an object of type ShoppingCartItems  from event emiter and emit fire this object

  @Output() totalPriceChangedtax: EventEmitter<number> =
    new EventEmitter<number>();

  // construct

  constructor(
    public prdservice: ProductService,
    private productserviceAPI: ProductsFrmAPIService,
    public router: Router
  ) {
    //if this element not a service it'll show an errorr if


      this.prdListForSelCat = this.prdservice.getAllProducts();
      //here we get the elements from the api
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.numberProducts = this.prdservice.getAllProducts();
    if (this.sentCatIDFrmMas != 0)
    {
            // this.prdListForSelCat = this.prdservice.getProductByCategoryID(
      //   this.sentCatIDFrmMas
      // );
      this.productserviceAPI.getProductByCatID(this.sentCatIDFrmMas).subscribe(
        (productList) => {this.prdListForSelCat = productList; },
        (err) => {console.log(err)} )
      }


    else {
      // this.prdListForSelCat = this.prdservice.getAllProducts();
      //here we get the elements from the api

            this.productserviceAPI.getAllProducts().subscribe(
              (productList) => {
                this.prdListForSelCat = productList;
              },
              (err) => {
                console.log(err);
              }
            );
    }
  }

  ngOnInit(): void {}

  viewProduct(prdID: number): void {
    //this function open a route through a service
    this.router.navigate(['/Product', prdID]); //take an array
    // this.router.navigateByUrl('/Product/'+ prdID); //take an object
  }

  calcTotalPrice(itemPrice: any, itemCount: any, prdQuantity: any) {
    this.totalOrderPrice = +itemPrice * +itemCount;
    this.totalPriceChanged.emit(this.totalOrderPrice);
  }

  calcTotalPriceTax(itemPrice: any, itemCount: any, prdQuantity: any) {
    if (itemCount == 0) {
      alert('you did not select a product');
      this.totalOrderPricetax = 0;
      this.totalPriceChangedtax.emit(this.totalOrderPricetax);
    }
    // else if (itemCount < prdQuantity) {
    //   alert(`only ${prdQuantity} available in stock`);
    //   this.totalOrderPricetax = +itemPrice * +itemCount * 1.14;
    //   this.totalPriceChangedtax.emit(this.totalOrderPricetax);
    // }
    else {
      this.totalOrderPricetax = +itemPrice * +itemCount * 1.14;
      this.totalPriceChangedtax.emit(this.totalOrderPricetax);
    }
  }

  increase(userQuentityInput: any, product: Product) {
    if (product.Quantity) {
      product.Quantity--;
      userQuentityInput.value++;
    } else {
      alert('Out of Stock');
    }

    this.addItemToCartItems.emit({
      //the event that wecreated above its fired here
      productID: product.id,
      productName: product.Name,
      unitPrice: product.Price,
      selectedQuantity: userQuentityInput.value,
      productImg: product.imgURL,
      productQuantity: product.Quantity,
    });
  }

  decrease(userQuentityInput: any, product: Product) {
    if (userQuentityInput.value > 0) {
      product.Quantity++;
      userQuentityInput.value--;
    }

    this.addItemToCartItems.emit({
      productID: product.id,
      productName: product.Name,
      unitPrice: product.Price,
      selectedQuantity: userQuentityInput.value,
      productImg: product.imgURL,
      productQuantity: product.Quantity,
    });
  }
}










































// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { Router } from '@angular/router';
// import { Product } from 'src/app/Models/product';
// import { ShoppingCartItems } from 'src/app/Models/shopping-cart-items';
// import { Storeinfo } from 'src/app/shared/Storeinfo';

// @Component({
//   selector: 'app-order-detail',
//   templateUrl: './order-detail.component.html',
//   styleUrls: ['./order-detail.component.scss'],
// })
// export class OrderDetailComponent implements OnInit {
//   info: Storeinfo = {
//     name: 'ITI',
//     logo: 'assets/1.jpg',
//     services: ['Marketing', 'Sales'],
//   };
//   clientName: string = '';
//   IsPurshased: boolean = false;

//   // @Input() selectedCategoryChild: number = 0;

//   // /////////////////////////////
//   prdList: Product[] = [];
//   totalOrderPrice: number = 0;
//   totalOrderPricetax: number = 0;

//   @Input() sentCatIDFrmMas: number = 0;

//   @Output() totalPriceChanged: EventEmitter<number> =
//     new EventEmitter<number>(); //make an object from event emiter and emit fire it

//   @Output() addItemToCartItems: EventEmitter<ShoppingCartItems> =
//     new EventEmitter<ShoppingCartItems>(); //make an object of type ShoppingCartItems  from event emiter and emit fire this object

//   @Output() totalPriceChangedtax: EventEmitter<number> =
//     new EventEmitter<number>();

//   constructor(public router: Router) {
//     this.prdList = [
//       {
//         ID: 1,
//         Name: 'Women shirt black',
//         Price: 100,
//         Quantity: 10,
//         imgURL: './assets/1(14).jpg',
//         CategoryID: 1,
//       },
//       {
//         ID: 2,
//         Name: 'Women shirt nily',
//         Price: 2300,
//         Quantity: 0,
//         imgURL: './assets/1(15).jpg',
//         CategoryID: 1,
//       },
//       {
//         ID: 3,
//         Name: 'Women shirt blue',
//         Price: 5000,
//         Quantity: 10,
//         imgURL: './assets/1(16).jpg',
//         CategoryID: 1,
//       },
//       {
//         ID: 4,
//         Name: 'Women ssweater red',
//         Price: 5000,
//         Quantity: 5,
//         imgURL: './assets/1(17).jpg',
//         CategoryID: 1,
//       },
//       {
//         ID: 5,
//         Name: 'Ipad x',
//         Price: 5000,
//         Quantity: 10,
//         imgURL: './assets/4.jpg',
//         CategoryID: 2,
//       },
//       {
//         ID: 6,
//         Name: 'Ipad 10',
//         Price: 6000,
//         Quantity: 1,
//         imgURL: './assets/1(38).jpg',
//         CategoryID: 2,
//       },
//       {
//         ID: 7,
//         Name: 'samsung tab',
//         Price: 5000,
//         Quantity: 4,
//         imgURL: './assets/1(38).jpg',
//         CategoryID: 2,
//       },
//       {
//         ID: 8,
//         Name: 'samsung tab10',
//         Price: 5000,
//         Quantity: 10,
//         imgURL: './assets/1(39).jpg',
//         CategoryID: 2,
//       },
//       {
//         ID: 9,
//         Name: 'Iphone ',
//         Price: 6000,
//         Quantity: 2,
//         imgURL: './assets/1(29).jpg',
//         CategoryID: 3,
//       },
//       {
//         ID: 10,
//         Name: 'Ipad 10',
//         Price: 6000,
//         Quantity: 1,
//         imgURL: './assets/1(30).jpg',
//         CategoryID: 3,
//       },
//       {
//         ID: 11,
//         Name: 'samsung tab',
//         Price: 5000,
//         Quantity: 2,
//         imgURL: './assets/1(31).jpg',
//         CategoryID: 3,
//       },
//       {
//         ID: 12,
//         Name: 'samsung tab10',
//         Price: 5000,
//         Quantity: 10,
//         imgURL: './assets/1(32).jpg',
//         CategoryID: 3,
//       },

//       {
//         ID: 13,
//         Name: 'Iphone ',
//         Price: 6000,
//         Quantity: 2,
//         imgURL: './assets/1(19).jpg',
//         CategoryID: 4,
//       },
//       {
//         ID: 14,
//         Name: 'Ipad 10',
//         Price: 6000,
//         Quantity: 1,
//         imgURL: './assets/1(20).jpg',
//         CategoryID: 4,
//       },
//       {
//         ID: 11,
//         Name: 'samsung tab',
//         Price: 5000,
//         Quantity: 0,
//         imgURL: './assets/1(21).jpg',
//         CategoryID: 4,
//       },
//       {
//         ID: 15,
//         Name: 'samsung tab10',
//         Price: 5000,
//         Quantity: 10,
//         imgURL: './assets/1(22).jpg',
//         CategoryID: 4,
//       },
//     ];
//   }

//   ngOnInit(): void {}

//   togglePages() {
//     this.IsPurshased = !this.IsPurshased;
//   }

//   viewProduct(prdID: number): void {
//     //this function open a route through a service
//     this.router.navigate(['/Product', prdID]); //take an array
//     // this.router.navigateByUrl('/Product/'+ prdID); //take an object
//   }

//   getProductFilter() {
//     if (this.sentCatIDFrmMas !== 0)
//       return this.prdList.filter(
//         (item) => item.CategoryID == this.sentCatIDFrmMas
//       );
//     else return this.prdList;
//   }

//   calcTotalPrice(itemPrice: any, itemCount: any, prdQuantity: any) {
//     this.totalOrderPrice = +itemPrice * +itemCount;
//     this.totalPriceChanged.emit(this.totalOrderPrice);
//   }

//   calcTotalPriceTax(itemPrice: any, itemCount: any, prdQuantity: any) {
//     if (itemCount == 0) {
//       alert('you did not select a product');
//       this.totalOrderPricetax = 0;
//       this.totalPriceChangedtax.emit(this.totalOrderPricetax);
//     }
//     // else if (itemCount < prdQuantity) {
//     //   alert(`only ${prdQuantity} available in stock`);
//     //   this.totalOrderPricetax = +itemPrice * +itemCount * 1.14;
//     //   this.totalPriceChangedtax.emit(this.totalOrderPricetax);
//     // }
//     else {
//       this.totalOrderPricetax = +itemPrice * +itemCount * 1.14;
//       this.totalPriceChangedtax.emit(this.totalOrderPricetax);
//     }
//   }

//   increase(userQuentityInput: any, product: Product) {
//     if (product.Quantity) {
//       product.Quantity--;
//       userQuentityInput.value++;
//     } else {
//       alert('Out of Stock');
//     }

//     this.addItemToCartItems.emit({
//       //the event that wecreated above its fired here
//       productID: product.ID,
//       productName: product.Name,
//       unitPrice: product.Price,
//       selectedQuantity: userQuentityInput.value,
//       productImg: product.imgURL,
//       productQuantity: product.Quantity,
//     });
//   }

//   decrease(userQuentityInput: any, product: Product) {
//     if (userQuentityInput.value > 0) {
//       product.Quantity++;
//       userQuentityInput.value--;
//     }

//     this.addItemToCartItems.emit({
//       productID: product.ID,
//       productName: product.Name,
//       unitPrice: product.Price,
//       selectedQuantity: userQuentityInput.value,
//       productImg: product.imgURL,
//       productQuantity: product.Quantity,
//     });
//   }
// }













