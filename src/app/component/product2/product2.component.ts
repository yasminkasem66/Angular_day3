import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/product';
import { Category } from '../../Models/category';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { Store } from 'src/app/Models/store';


@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.scss'],
})
export class Product2Component implements OnInit {
  //dataSource : MatTableDataSource<any>;
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

  Discount: DiscountOffers = DiscountOffers.tenpers;

  constructor() {
    this.catList = [
      {
        ID: 1,
        Name: 'Women Cloths',
      },
      {
        ID: 2,
        Name: 'Shavers &others',
      },
      {
        ID: 3,
        Name: ' soft drinks ',
      },
      {
        ID: 4,
        Name: 'Men Cloths',
      },
    ];

    this.prdList = [
      {
        ID: 1,
        Name: 'Women shirt black',
        Price: 100,
        Quantity: 10,
        imgURL: './assets/1(14).jpg',
        CategoryID: 1,
      },
      {
        ID: 2,
        Name: 'Women shirt nily',
        Price: 2300,
        Quantity: 0,
        imgURL: './assets/1(15).jpg',
        CategoryID: 1,
      },
      {
        ID: 3,
        Name: 'Women shirt blue',
        Price: 5000,
        Quantity: 10,
        imgURL: './assets/1(16).jpg',
        CategoryID: 1,
      },
      {
        ID: 4,
        Name: 'Women ssweater red',
        Price: 5000,
        Quantity: 5,
        imgURL: './assets/1(17).jpg',
        CategoryID: 1,
      },
      {
        ID: 5,
        Name: 'Ipad x',
        Price: 5000,
        Quantity: 10,
        imgURL: './assets/4.jpg',
        CategoryID: 2,
      },
      {
        ID: 6,
        Name: 'Ipad 10',
        Price: 6000,
        Quantity: 1,
        imgURL: './assets/1(38).jpg',
        CategoryID: 2,
      },
      {
        ID: 7,
        Name: 'samsung tab',
        Price: 5000,
        Quantity: 4,
        imgURL: './assets/1(38).jpg',
        CategoryID: 2,
      },
      {
        ID: 8,
        Name: 'samsung tab10',
        Price: 5000,
        Quantity: 10,
        imgURL: './assets/1(39).jpg',
        CategoryID: 2,
      },
      {
        ID: 9,
        Name: 'Iphone ',
        Price: 6000,
        Quantity: 2,
        imgURL: './assets/1(29).jpg',
        CategoryID: 3,
      },
      {
        ID: 10,
        Name: 'Ipad 10',
        Price: 6000,
        Quantity: 1,
        imgURL: './assets/1(30).jpg',
        CategoryID: 3,
      },
      {
        ID: 11,
        Name: 'samsung tab',
        Price: 5000,
        Quantity: 2,
        imgURL: './assets/1(31).jpg',
        CategoryID: 3,
      },
      {
        ID: 12,
        Name: 'samsung tab10',
        Price: 5000,
        Quantity: 10,
        imgURL: './assets/1(32).jpg',
        CategoryID: 3,
      },

      {
        ID: 13,
        Name: 'Iphone ',
        Price: 6000,
        Quantity: 2,
        imgURL: './assets/1(19).jpg',
        CategoryID: 4,
      },
      {
        ID: 14,
        Name: 'Ipad 10',
        Price: 6000,
        Quantity: 1,
        imgURL: './assets/1(20).jpg',
        CategoryID: 4,
      },
      {
        ID: 11,
        Name: 'samsung tab',
        Price: 5000,
        Quantity: 0,
        imgURL: './assets/1(21).jpg',
        CategoryID: 4,
      },
      {
        ID: 15,
        Name: 'samsung tab10',
        Price: 5000,
        Quantity: 10,
        imgURL: './assets/1(22).jpg',
        CategoryID: 4,
      },
    ];

    this.clientName = 'Jasmin';
  }

  getProductFilter() {
    if (this.selectedCategory !== 0)
      return this.prdList.filter(
        (item) => item.CategoryID == this.selectedCategory
      );
    else return this.prdList;
  }

  // filteritem(cat:number) {
  //    alert(cat);
  //   let x= this.prdList
  //   if (cat) {
  //     this.prdList = this.prdList.filter((item) => {
  //       // alert(item.CategoryID);
  //       return item.CategoryID == cat;
  //     });
  //   }
  //   return this.prdList;
  // }

  ngOnInit(): void {}

  togglePages() {
    this.IsPurshased = !this.IsPurshased;
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
}
