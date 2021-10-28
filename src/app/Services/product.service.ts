import { Injectable } from '@angular/core';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
  
  
export class ProductService {
  private prdList: Product[] = [];

  constructor() {
    
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
        Quantity: 0,
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
        Quantity: 0,
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
        Quantity: 0,
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
  }
   
  getAllProducts(): Product[] {
    return this.prdList;
  }

  getCountProducts():number {

    return this.prdList.length;
  }
       

  getProductByCategoryID(catID: number): Product[]{
        return this.prdList.filter((item) => item.CategoryID == catID);
  }

  getProductByID(prdID: number): Product |undefined{  //find maybe return undefined that's why why put undefinied
        return this.prdList.find((item) => item.ID == prdID);
  }
  
}
