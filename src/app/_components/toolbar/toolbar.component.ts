import {Component, Input} from '@angular/core';

import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  @Input() sidebar: any;

  constructor(
    public authService: AuthenticationService,
  ) { }

  toggleSidebar() {
    if (this.sidebar.opened) {
      this.sidebar.close();
    } else {
      this.sidebar.open();
    }
  }

}
