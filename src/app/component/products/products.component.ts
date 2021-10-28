import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/product';
import { Category } from '../../Models/category';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  todayDate: number = Date.now();
  clientName: string = '';
  imgHoverColor: string = 'pink';

  prdList: Product[] = [];
  
  catList: Category[] = [];
  selectedCategory: number = 0;

  color = 'red';

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
        Name: 'Lenvo thinkpad',
        Price: 10000000,
        Quantity: 10,
        imgURL: 'https://fakeimg.pl/250x100/',
        CategoryID: 1,
      },
      {
        ID: 2,
        Name: 'MacBook Pro',
        Price: 230000000,
        Quantity: 0,
        imgURL: 'https://fakeimg.pl/250x100/',
        CategoryID: 1,
      },
      {
        ID: 3,
        Name: 'Lenvo x',
        Price: 50000000,
        Quantity: 10,
        imgURL: 'https://fakeimg.pl/250x100/',
        CategoryID: 1,
      },
      {
        ID: 4,
        Name: 'Lenvo tablet',
        Price: 5000,
        Quantity: 0,
        imgURL: 'https://fakeimg.pl/250x100/',
        CategoryID: 2,
      },
      {
        ID: 5,
        Name: 'Ipad x',
        Price: 5000,
        Quantity: 10,
        imgURL: 'https://fakeimg.pl/250x100/',
        CategoryID: 2,
      },
      {
        ID: 6,
        Name: 'Ipad 10',
        Price: 6000,
        Quantity: 1,
        imgURL: 'https://fakeimg.pl/250x100/',
        CategoryID: 2,
      },
      {
        ID: 7,
        Name: 'samsung tab',
        Price: 5000,
        Quantity: 0,
        imgURL: 'https://fakeimg.pl/250x100/',
        CategoryID: 3,
      },
      {
        ID: 8,
        Name: 'samsung tab10',
        Price: 5000,
        Quantity: 10,
        imgURL: 'https://fakeimg.pl/250x100/',
        CategoryID: 3,
      },
      {
        ID: 9,
        Name: 'Iphone ',
        Price: 6000,
        Quantity: 2,
        imgURL: 'https://fakeimg.pl/250x100/',
        CategoryID: 3,
      },
    ];

    this.clientName = 'Jasmin';
  }

  ngOnInit(): void { }

  

  getProductFilter() {
    if (this.selectedCategory !==0) return this.prdList.filter(item=> item.CategoryID == this.selectedCategory);
    else return this.prdList;
 
  }
}
