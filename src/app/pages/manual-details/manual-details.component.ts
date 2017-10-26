import {Component, OnDestroy, OnInit} from '@angular/core';
import {ManualService} from '../../_services/manual.service';
import {Manual} from '../../_models/manual';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-manual-details',
  templateUrl: './manual-details.component.html',
  styleUrls: ['./manual-details.component.css']
})
export class ManualDetailsComponent implements OnInit, OnDestroy {

  manual: Manual;
  loading = true;

  private sub: any;

  constructor(
    private manualService: ManualService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.manualService.getManual(+params['id'])
        .then(manual => {
          this.manual = manual;
          this.loading = false;
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
