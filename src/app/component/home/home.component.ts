import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter,map } from 'rxjs/operators';
import { NotificationService } from 'src/app/Services/notification.service';
import { Storeinfo } from 'src/app/shared/Storeinfo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  info: Storeinfo = {
    name: 'ITI',
    logo: 'assets/1.jpg',
    services: ['Marketing', 'Sales'],
  };

  // companyName: string = 'ITI';
  // logoUrl: string = 'assets/1.jpg';
  // service: string[] = ['x', 'y'];
  defautView = 'certificates';

  isServicesHidden: boolean = false;
  userFeedback: string = ' ';
  isFavorite: boolean = false;
  private subscriptionList: Subscription[] = [];

  constructor(private notificationMsgService: NotificationService) {}
  ngOnDestroy(): void {
    for (let sub of this.subscriptionList) {
      console.log('Destory');

      sub.unsubscribe();
    }
  }
  ngOnInit(): void {

    // start

    // const sunbscriber = {
    //   next: (notifMsg:string) => { alert(notifMsg)},
    //   err: (err:string) => { alert(err)},
    //   complete: () => { alert("Completed")},
    // };
    // this.notificationMsgService
    //   .getSequenceNotifications()
    //   .pipe(
    //     filter((elem) => elem != ' thanks for shopping with us'),
    //     map((elem) => 'jasmin ' + elem)
    //   )
    //   .subscribe(sunbscriber);

    // end

    // this.notificationMsgService.getNotifications().subscribe(sunbscriber);
    // here we use our observer and it takes three variable
    ////////
  //   let sub = this.notificationMsgService.getNotifications().subscribe(
  //     (notifMsg) => {
  //       // next
  //       alert(notifMsg);
  //     },
  //     (err) => {
  //       //error
  //       alert(err);
  //     },
  //     () => {
  //       //completed
  //       alert('Completed');
  //     }
  //   );
  //   this.subscriptionList.push(sub);
    
  }

  toggleServices() {
    this.isServicesHidden = !this.isServicesHidden;
  }

  onFavoriteClick() {
    this.isFavorite = !this.isFavorite;
  }

  setView(sntdefautView:string) {
    this.defautView = sntdefautView;
  }

  //////
}



