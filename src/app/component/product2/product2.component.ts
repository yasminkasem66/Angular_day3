import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/product';
import { Category } from '../../Models/category';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { Store } from 'src/app/Models/store';
import { ShoppingCartItems } from 'src/app/Models/shopping-cart-items';


@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.scss'],
})
export class Product2Component implements OnInit {
  //dataSource : MatTableDataSource<any>;

  date: number = Date.now();
  ID: number = 0;
  NID: number = 0;
  prdQuantityy: number = 0;
  show: boolean = true;
  cardHoverColor: string = 'pink';
  clientName: string = '';
  IsPurshased: boolean = false;
  store: Store = {
    name: 'jasmin Store',
    branches: ['Alex', 'cario'],
    imgURL: './assets/images/jasmin.png',
  };
  prdList: Product[] = [];
  catList: Category[] = [];
  selectedCategory: number = 0;
  catName: string = '';
  color = 'red';
  totalOrderPrice: number = 0;

  addItemToshoppingCartItems: ShoppingCartItems[] | undefined;

  Discount: DiscountOffers = DiscountOffers.tenpers;

  constructor() {
    this.ID = 1111222233334444;
    this.NID = 29506062701825;

        this.catList = [
          { id: 1, Name: 'Women Cloths', Description: 'this is describe' },
          { id: 2, Name: 'Shavers &others', Description: 'this is describe' },
          { id: 3, Name: ' soft drinks ', Description: 'this is describe' },
          { id: 4, Name: 'Men Cloths', Description: 'this is describe' },
        ];
    this.prdList = [
      {
        id: 1,
        Name: 'Women shirt black',
        Price: 100,
        Quantity: 10,
        imgURL: './assets/1(14).jpg',
        Categoryid: 1,
      },
      {
        id: 2,
        Name: 'Women shirt nily',
        Price: 2300,
        Quantity: 0,
        imgURL: './assets/1(15).jpg',
        Categoryid: 1,
      },
      {
        id: 3,
        Name: 'Women shirt blue',
        Price: 5000,
        Quantity: 10,
        imgURL: './assets/1(16).jpg',
        Categoryid: 1,
      },
      {
        id: 4,
        Name: 'Women ssweater red',
        Price: 5000,
        Quantity: 5,
        imgURL: './assets/1(17).jpg',
        Categoryid: 1,
      },
      {
        id: 5,
        Name: 'Ipad x',
        Price: 5000,
        Quantity: 10,
        imgURL: './assets/4.jpg',
        Categoryid: 2,
      },
      {
        id: 6,
        Name: 'Ipad 10',
        Price: 6000,
        Quantity: 1,
        imgURL: './assets/1(38).jpg',
        Categoryid: 2,
      },
      {
        id: 7,
        Name: 'samsung tab',
        Price: 5000,
        Quantity: 4,
        imgURL: './assets/1(38).jpg',
        Categoryid: 2,
      },
      {
        id: 8,
        Name: 'samsung tab10',
        Price: 5000,
        Quantity: 10,
        imgURL: './assets/1(39).jpg',
        Categoryid: 2,
      },
      {
        id: 9,
        Name: 'Iphone ',
        Price: 6000,
        Quantity: 2,
        imgURL: './assets/1(29).jpg',
        Categoryid: 3,
      },
      {
        id: 10,
        Name: 'Ipad 10',
        Price: 6000,
        Quantity: 1,
        imgURL: './assets/1(30).jpg',
        Categoryid: 3,
      },
      {
        id: 11,
        Name: 'samsung tab',
        Price: 5000,
        Quantity: 2,
        imgURL: './assets/1(31).jpg',
        Categoryid: 3,
      },
      {
        id: 12,
        Name: 'samsung tab10',
        Price: 5000,
        Quantity: 10,
        imgURL: './assets/1(32).jpg',
        Categoryid: 3,
      },

      {
        id: 13,
        Name: 'Iphone ',
        Price: 6000,
        Quantity: 2,
        imgURL: './assets/1(19).jpg',
        Categoryid: 4,
      },
      {
        id: 14,
        Name: 'Ipad 10',
        Price: 6000,
        Quantity: 1,
        imgURL: './assets/1(20).jpg',
        Categoryid: 4,
      },
      {
        id: 11,
        Name: 'samsung tab',
        Price: 5000,
        Quantity: 0,
        imgURL: './assets/1(21).jpg',
        Categoryid: 4,
      },
      {
        id: 15,
        Name: 'samsung tab10',
        Price: 5000,
        Quantity: 10,
        imgURL: './assets/1(22).jpg',
        Categoryid: 4,
      },
    ];

    this.clientName = 'Jasmin';
  }

  getProductFilter() {
    if (this.selectedCategory !== 0)
      return this.prdList.filter(
        (item) => item.Categoryid == this.selectedCategory
      );
    else return this.prdList;
  }


  ngOnInit(): void {}

  togglePages() {
    this.IsPurshased = !this.IsPurshased;
  }

  decreaseAmount(product: Product) {
    product.Quantity--;
  }

  calcTotalPrice(itemPrice: any, itemCount: any, prdQuantity: any) {
    if (prdQuantity == 0) {
      alert('this Product out of stock');
      this.totalOrderPrice = 0;
      return this.totalOrderPrice;
    } else if (itemCount > prdQuantity) {
      alert(`only ${prdQuantity} available in stock`);
      this.totalOrderPrice = +itemPrice * +itemCount;
      return this.totalOrderPrice;
    } else {
      this.totalOrderPrice = +itemPrice * +itemCount;
      return this.totalOrderPrice;
    }
  }

  showID() {
    this.show = !this.show;
  }

  increase(inputVal: any, product: Product) {
    if (product.Quantity) {
      product.Quantity--;
      inputVal.value++;
    } else {
      alert('Not Enough Quantity');
    }
  }
  decrease(inputVal: any, product: Product) {
    if (inputVal.value > 0) {
      product.Quantity++;
      inputVal.value--;
    }
  }
}
