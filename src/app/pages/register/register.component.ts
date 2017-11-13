import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../_services/user.service';
import {NotificationsService} from "angular2-notifications/dist";
import {TranslationService} from "../../_translations/translation.service";
import {LoadingService} from "../../_services/loading.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(
    private router: Router,
    private userService: UserService,
    private notificationsService: NotificationsService,
    private translationService: TranslationService,
    private loadingSercive: LoadingService
  ) { }

  ngOnInit() { }

  register() {
    this.loadingSercive.start();
    this.userService.createUser(this.model.email, this.model.password, this.model.first_name, this.model.last_name)
      .subscribe(
      (data) => {
        this.router.navigate(['/login']);
        this.loadingSercive.end();
        this.notificationsService.info(
          this.translationService.instant('Check your email'),
          this.translationService.instant('We need to verify your email address')
        );
      },
      (err) => {
        this.notificationsService.error(
          this.translationService.instant('Error!'),
          this.translationService.instant(JSON.parse(err._body))
        );
        this.loadingSercive.end();
      });
  }

}
