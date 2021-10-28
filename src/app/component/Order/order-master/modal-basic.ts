import { Component } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal-basic.html',
})
export class NgbdModalBasic {
  closeResult = '';

  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  cartItems: any[] = [];
  totalPrice: number = 0;
  totalPriceWithTax: number = 0;
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
