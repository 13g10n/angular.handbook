import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;

  hasError = false;
  errorHeading = '';
  errorBody = '';

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() { }

  register() {
    this.loading = true;
    this.hasError = false;
    this.userService.createUser(this.model.email, this.model.password, this.model.first_name, this.model.last_name)
      .subscribe(
      (data) => {
        this.hasError = false;
        this.router.navigate(['/login']);
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
