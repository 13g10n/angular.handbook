import { Injectable } from '@angular/core';
import {$WebSocket} from 'angular2-websocket/angular2-websocket';
import {AuthenticationService} from './authentication.service';
import { NotificationsService } from 'angular2-notifications/dist';

@Injectable()
export class CommentsService {

  ws: $WebSocket;

  constructor(
    private authService: AuthenticationService,
    private notificationsService: NotificationsService
  ) { }

  connect(id: number) {
    this.ws = new $WebSocket('ws://localhost:8000/comments/?post=' + id);
    this.ws.onOpen(
      () => {
        console.log('Comments socket opened for post ' + id);
      }
    );
    this.ws.onMessage(
      (msg: MessageEvent) => {
        console.log('RECIVED!');
      },
      {
        autoApply: false
      }
    );
  }

}
