import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationList: string[] = [];
  private notificationObserable!: Observable<string>;

  constructor() {
    this.notificationList = [
      'Dont Miss Our offeres',
      'wait forour white friday offers',
      // " ",
      'shipping is free in the weekend',
      'big sale is coming soon',
      'thanks for shopping with us',
    ];

    // we are creating our observer and anyone can subscribe on it
    let counter = 0;
    this.notificationObserable = new Observable<string>((observer) => {
      let x = setInterval(() => {
        console.log('in set Insterval');

        if (this.notificationList[counter] == ' ') {
          observer.error('Error Empty Notification');
        }
        if (counter >= this.notificationList.length) {
          observer.complete(); //function says that the observer has finished
          //complete will call the unsubscribe function or the user change the page and call onDestroy then stop the unsubscribe function
        }
        if (counter < this.notificationList.length) {
          observer.next(this.notificationList[counter]);
          counter++;
        }
      }, 2000);

      return {
        unsubscribe() {
          clearInterval(x);
        },
      };
    });
  }

  getNotifications(): Observable<string> {
    return this.notificationObserable;
  }

  getSequenceNotifications(): Observable<string> {
    return from(this.notificationList);
  }
  // this.notificationMsgService.getSequenceNotifications().subscribe(sunbscriber);

  // getSequenceNotifications(): Observable<string> {
  //       const obs1 = of(10, 20, 30, 40);
  //       const obs2 = from(10, 20, 30, 40);
  // }
}
