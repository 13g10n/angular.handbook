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

  user: User = this.authService.getUser();

  constructor(
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  toggleSidebar() {
    if (this.sidebar.opened) {
      this.sidebar.close();
    } else {
      this.sidebar.open();
    }
  }

}
