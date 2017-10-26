import { Component, OnInit } from '@angular/core';
import { ManualService } from '../../_services/manual.service';
import { Manual } from '../../_models/manual';
import { Router } from '@angular/router';


@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css', ],
})

export class HomeComponent implements OnInit {

  manuals: Manual[] = [];

  constructor(
    private manualService: ManualService,
    private router: Router
  ) { }

  ngOnInit() {
    this.manualService.getManualList().then(manuals => this.manuals = manuals);
  }

  openDetails(manualId: number) {
    this.router.navigate(['/manual', manualId]);
  }

}
