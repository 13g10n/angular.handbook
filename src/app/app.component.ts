import { Component } from '@angular/core';
import { NotificationService } from './_services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public options = {
    position: ['bottom', 'left'],
    timeOut: 5000,
    lastOnBottom: true
  };

  constructor(
    private notificationService: NotificationService
  ) {}

}
