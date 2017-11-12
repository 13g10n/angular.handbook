import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AuthenticationService } from '../../_services/authentication.service';
import {UserService} from "../../_services/user.service";
import {User} from "../../_models/user";

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css', ],
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;

  hasError = false;
  errorHeading = '';
  errorBody = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.hasError = false;
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
      (data) => {
        this.hasError = false;

        this.userService.getDetails().subscribe(
          (data) => {
            const user: User = new User();
            user.email = data.email;
            user.first_name = data.first_name;
            user.last_name = data.last_name;
            user.avatar = data.avatar;
            user.id = data.pk;
            user.language = data.language;
            this.authenticationService.setUser(user);
          }
        );

        this.router.navigate(['/']);
      },
      (err) => {
        this.hasError = true;
        for (const key in JSON.parse(err._body)) {
          this.errorBody = JSON.parse(err._body)[key];
          this.errorHeading = key;
          break;
        }
        this.loading = false;
      });
  }
}

