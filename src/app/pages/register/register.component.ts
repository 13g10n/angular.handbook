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
  error = '';

  constructor(
      private router: Router,
      private userService: UserService) { }

  ngOnInit() {

  }

  register() {
      this.loading = true;
      this.userService.createUser(this.model.email, this.model.password, this.model.first_name, this.model.last_name)
            .subscribe(
                (data) => { this.router.navigate(['/login']); },
                (err) => {
                    this.error = Object.keys(JSON.parse(err._body))[0] + ': ' + Object.values(JSON.parse(err._body))[0];
                    this.loading = false;
                });
  }

}
