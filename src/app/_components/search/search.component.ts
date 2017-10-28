import { Component } from '@angular/core';

import { ManualService } from '../../_services/manual.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(
    private manualService: ManualService,
    private router: Router,
  ) { }

  search = (query: string) => {
    return this.manualService.searchManual(query);
  }

  selected(manual) {
    this.router.navigate(['/manual', manual.id]);
  }

}
