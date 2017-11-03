import { Injectable } from '@angular/core';
import {$WebSocket} from 'angular2-websocket/angular2-websocket';
import {AuthenticationService} from './authentication.service';
import { NotificationsService } from 'angular2-notifications/dist';

@Injectable()
export class NotificationService {

  ws: $WebSocket;

  constructor(
    private authService: AuthenticationService,
    private _notificationsService: NotificationsService
  ) {
    this.ws = new $WebSocket('ws://127.0.0.1:8000/notification/?token=' + this.authService.getToken());

    this.ws.onOpen(
      () => {
        console.log('opened!');
      }
    );

    this.ws.onMessage(
      (msg: MessageEvent) => {
        const notification = JSON.parse(msg.data);
        this._notificationsService.info(
          notification['title'],
          notification['text'],
          {
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
            maxLength: 140
          }
        );
      },
      {
        autoApply: false
      }
    );

  }

}
