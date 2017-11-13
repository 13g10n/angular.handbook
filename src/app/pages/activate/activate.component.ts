import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {UserService} from '../../_services/user.service';
import {NotificationsService} from "angular2-notifications/dist";
import {TranslationService} from "../../_translations/translation.service";
import {LoadingService} from "../../_services/loading.service";

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private notificationsService: NotificationsService,
    private translationService: TranslationService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.activatedRoute
      .queryParams
      .subscribe(params => {
        this.loadingService.start();
        if (params['code']) {
          this.userService.activateUser(params['code']).subscribe(
            (data) => {
              this.router.navigate(['/login']);
              this.loadingService.end();
              this.notificationsService.success(
                this.translationService.instant('Well done!'),
                this.translationService.instant('Now you can sign in with your email and password')
              );
            },
            (err) => {
              this.router.navigate(['/404']);
              this.loadingService.end();
            }
          );
        } else {
          this.router.navigate(['/404']);
          this.loadingService.end();
        }
      });

  }

}
