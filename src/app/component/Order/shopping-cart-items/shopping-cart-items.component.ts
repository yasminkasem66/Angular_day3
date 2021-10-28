import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-items',
  templateUrl: './shopping-cart-items.component.html',
  styleUrls: ['./shopping-cart-items.component.scss'],
})
export class ShoppingCartItemsComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;
  totalPriceWithTax: number = 0;
  constructor() {}

  ngOnInit(): void {}

  addItemToCartItems(UserCartItems: any) {
    // alert(UserCartItems.productID);
    this.totalPrice = 0;
    this.totalPriceWithTax = 0;
    let newItem = this.cartItems.find(
      (item) => UserCartItems.productID == item.productID
    );

    if (newItem) {
      newItem.selectedQuantity = UserCartItems.selectedQuantity;
      if (newItem.selectedQuantity == 0) {
        this.cartItems.splice(newItem, 1);
      }
    } else {
      if (UserCartItems.selectedQuantity) {
        this.cartItems.push(UserCartItems);
      }
    }

    for (let item of this.cartItems) {
      this.totalPrice += item.unitPrice * item.selectedQuantity;
      this.totalPriceWithTax = this.totalPrice * 1.14;
    }
  }
}
