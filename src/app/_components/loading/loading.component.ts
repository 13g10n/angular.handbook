import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from '../../_services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, OnDestroy {

  isLoading = false;
  subscription: any;

  constructor(
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.subscription = this.loadingService.getStateChangeEmitter()
      .subscribe(state => {
        this.isLoading = state;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
