import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() sidebar: any;

  constructor() { }

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
