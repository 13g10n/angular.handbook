import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../_translations/translate.service';
import { User } from '../../_models/user';
import {AuthenticationService} from '../../_services/authentication.service';
import {UserService} from '../../_services/user.service';
import {NotificationsService} from "angular2-notifications/dist";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = this.authService.getUser();

  public supportedLanguages = [
    { display: 'English', value: 'en', flag: 'us' },
    { display: 'Русский', value: 'ru', flag: 'ru' },
  ];

  selectedLanguage = this.getSelectedLanguage();

  constructor(
    private _translate: TranslateService,
    private authService: AuthenticationService,
    private userService: UserService,
    private notificationService: NotificationsService
  ) { }

  ngOnInit() {
    this._translate.enableFallback(true);
  }

  getSelectedLanguage() {
    for (const lang of this.supportedLanguages) {
      if ( this.isCurrentLang(lang.value) ) {
        return lang;
      }
    }
  }

  isCurrentLang(lang: string) {
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    this._translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  langChange(option) {
    this.selectLang(option.value);
  }

  save() {
    this.user.language = this.selectedLanguage.value;
    this.userService.updateInfo(this.user).subscribe(
      (res) => {
        this.notificationService.success(
          this._translate.instant('Saved'),
          this._translate.instant('Profile is updated'),
          {
            timeOut: 3000,
            clickToClose: true,
            maxLength: 140
          }
        );
      },
    (err) => {
        this.notificationService.error(
          this._translate.instant('Error'),
          this._translate.instant(err.body),
          {
            timeOut: 3000,
            clickToClose: true,
            maxLength: 140
          }
        );
      }
    );
  }

}
