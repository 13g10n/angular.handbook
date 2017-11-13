import { Component, Input, OnInit } from '@angular/core';
import {AuthenticationService} from '../../_services/authentication.service';
import {User} from '../../_models/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() sidebar: any;

  user: User;
  subscription: any;

  constructor(
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.subscription = this.authService.getUserChangeEmitter()
      .subscribe(user => {
        this.user = user;
      });
    this.user = this.authService.getUser();
  }

  toggleSidebar() {
    if (this.sidebar.opened) {
      this.sidebar.close();
    } else {
      this.sidebar.open();
    }
  }

}
