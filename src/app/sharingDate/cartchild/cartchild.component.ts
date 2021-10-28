import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-cartchild',
  templateUrl: './cartchild.component.html',
  styleUrls: ['./cartchild.component.scss'],
})
export class CartchildComponent implements OnInit, OnChanges {
  todayDate: number = Date.now();
  clientName: string = '';
  imgHoverColor: string = 'pink';
  totalOrderPrice: number = 0; //it's the same property in parent which is totalPriceForBoughtItems
  totalOrderPricetax: number = 0; //it's the same property in parent which is totalPriceForBoughtItems
  @Input() selectedCategoryChild: number = 0;
  prdList: Product[] = [];
  @Output() totalPriceChanged: EventEmitter<number> =
    new EventEmitter<number>();
  
  @Output() totalPriceChangedtax: EventEmitter<number> =
    new EventEmitter<number>();

  // @ViewChild(app-cartchild) orderDetailsCmp!: app-cartchild;

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
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}

  getProductFilter() {
    if (this.selectedCategoryChild !== 0)
      return this.prdList.filter(
        (item) => item.CategoryID == this.selectedCategoryChild
      );
    else return this.prdList;
  }

  calcTotalPrice(itemPrice: any, itemCount: any, prdQuantity: any) {
    if (prdQuantity == 0) {
      alert('this Product out of stock');
      this.totalOrderPrice = 0;
      this.totalPriceChanged.emit(this.totalOrderPrice);
    } else if (itemCount > prdQuantity) {
      alert(`only ${prdQuantity} available in stock`);
      this.totalOrderPrice = +itemPrice * +itemCount;
      this.totalPriceChanged.emit(this.totalOrderPrice);
    } else {
      this.totalOrderPrice = +itemPrice * +itemCount;
      this.totalPriceChanged.emit(this.totalOrderPrice);
    }
  }
  calcTotalPriceTax(itemPrice: any, itemCount: any, prdQuantity: any) {
    if (prdQuantity == 0) {
      alert('this Product out of stock');
      this.totalOrderPricetax = 0;
      this.totalPriceChangedtax.emit(this.totalOrderPricetax);
    } else if (itemCount > prdQuantity) {
      alert(`only ${prdQuantity} available in stock`);
      this.totalOrderPricetax = +itemPrice * +itemCount + 114;
      this.totalPriceChangedtax.emit(this.totalOrderPricetax);
    } else {
      this.totalOrderPricetax = +itemPrice * +itemCount + 114;
      this.totalPriceChangedtax.emit(this.totalOrderPricetax);
    }
  }
}
