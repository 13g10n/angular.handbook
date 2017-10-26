import { Component, OnInit, Input } from '@angular/core';

import { AuthenticationService } from '../../_services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() sidebar;

  constructor(public authService: AuthenticationService) {
  }

  ngOnInit() {

  }

}
