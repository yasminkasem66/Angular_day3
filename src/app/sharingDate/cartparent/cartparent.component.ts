import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-cartparent',
  templateUrl: './cartparent.component.html',
  styleUrls: ['./cartparent.component.scss'],
})
export class CartparentComponent implements OnInit {
  catList: Category[] = [];
  selectedCategory: number = 0;
  totalPriceForBoughtItems: number = 0; //calc its value from child components
  totalOrderPricetax: number = 0;

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
  }

  ngOnInit(): void {}

  onTotalPriceChanged(OrderTotalPrice: number) {
    this.totalPriceForBoughtItems = OrderTotalPrice;
  }

  onTotalPriceChangedTax(totalOrderPricetax: number) {
    this.totalPriceForBoughtItems = totalOrderPricetax +14;
  }
}
