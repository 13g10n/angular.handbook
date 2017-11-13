import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';
import {UserService} from '../../_services/user.service';
import {User} from '../../_models/user';
import {LoadingService} from '../../_services/loading.service';
import {NotificationsService} from 'angular2-notifications/dist';
import {TranslationService} from '../../_translations/translation.service';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css', ],
})

export class LoginComponent implements OnInit {
  model: any = {};

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private userService: UserService,
    private loadingService: LoadingService,
    private notificationsService: NotificationsService,
    private translationService: TranslationService
  ) { }

  ngOnInit() {
    this.authService.logout();
  }

  login() {
    this.loadingService.start();
    this.authService.login(this.model.email, this.model.password)
      .subscribe(
      () => {
        this.userService.getDetails().subscribe(
          (data) => {
            const user: User = data;
            user.id = data.pk;
            this.authService.setUser(user);
          }
        );
        this.router.navigate(['/']);
        this.loadingService.end();
      },
      (err) => {
        this.notificationsService.error(
          this.translationService.instant('Error!'),
          this.translationService.instant(JSON.parse(err._body))
        );
        this.loadingService.end();
      });
  }
}

