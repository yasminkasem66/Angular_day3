import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { CategoryService } from 'src/app/Services/category.service';
import { Storeinfo } from 'src/app/shared/Storeinfo';
import { OrderDetailComponent } from '../order-detail/order-detail.component';
// import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss'],
})
export class OrderMasterComponent implements OnInit, AfterViewInit {
  totalOrderPrice: number = 0;
  Discount: DiscountOffers = DiscountOffers.tenpers;
  date: number = Date.now();
  ID: number = 1111444422229999;
  NID: number = 29506062701825;
  show: boolean = true;
  cardHoverColor: string = 'pink';

  // @ViewChild('custName') customerName: ElementRef | undefined;
  @ViewChild('custName') customerName!: ElementRef;
  //here we have an object from the element in html  which is the input that has custname as a refernnce and any element come from the html we access it (after viewinit ) cuz only at this condition the ts can see it
  @ViewChild(OrderDetailComponent)
  OrderDetailComponentjj!: OrderDetailComponent;
  //here we access the component that is  founded in the html it's is a component

  info: Storeinfo = {
    name: 'Yasmin',
    logo: 'assets/1.jpg',
    services: ['Marketing', 'Sales'],
  };

  catList: Category[] = [];
  selectedCategory: number = 0; //send to child using input
  totalPriceForBoughtItems: number = 0; //calc its value from child components
  totalPriceForBoughtItemstax: number = 0; //calc its value from child components
  cartItems: any[] = [];
  totalPrice: number = 0;
  totalPriceWithTax: number = 0;

  private sentPrdID: number = 0;
  constructor(private categoriesserviceAPI: CategoryService) {
    // this.catList = [
    //   { ID: 1, Name: 'Women Cloths', Description: 'this is describe' },
    //   { ID: 2, Name: 'Shavers &others', Description: 'this is describe' },
    //   { ID: 3, Name: ' soft drinks ', Description: 'this is describe' },
    //   { ID: 4, Name: 'Men Cloths', Description: 'this is describe' },
    // ];

              this.categoriesserviceAPI.getAllCategories().subscribe(
        (catListAPI) => {this.catList = catListAPI },
        (err) => {console.log(err)} )
      
  }
  ngAfterViewInit(): void {
    this.customerName.nativeElement.style.background = 'gray';
    console.log(`price:${this.OrderDetailComponentjj.totalOrderPrice}`);
  }
  checkName() {
    let custome = this.customerName.nativeElement.value;
    console.log(`you enterd ${custome}`);
    console.log(
      `price synch from @view child:${this.OrderDetailComponentjj.totalOrderPrice}`
    );
  }

  ngOnInit(): void {
    // this.activatedRoute.snapshot.paramMap.get('id');
  }

  showID() {
    this.show = !this.show;
  }

  // when total price change in child its also change in parent
  onTotalPriceChanged(OrderTotalPrice: number) {
    this.totalPriceForBoughtItems = OrderTotalPrice;
  }

  onTotalPriceChangedTax(totalOrderPricetax: number) {
    this.totalPriceForBoughtItemstax = totalOrderPricetax * 1.14;
  }

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



















