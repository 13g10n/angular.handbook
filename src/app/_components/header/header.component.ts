import { Component, OnInit, Input } from '@angular/core';

import { AuthenticationService } from '../../_services/authentication.service';
import { ManualService } from '../../_services/manual.service';
import { Manual } from '../../_models/manual';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  results: Manual[] = [];

  constructor(
    public authService: AuthenticationService,
    private manualService: ManualService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  search = (query: string) => {
    return this.manualService.searchManual(query).then(result => this.results = result);
  }

  selected(manual) {
    this.router.navigate(['/manual', manual.id]);
  }

  goHome(){
    this.router.navigate(['']);
  }

}
