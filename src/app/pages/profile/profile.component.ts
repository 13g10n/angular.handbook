import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../_translations/translation.service';
import { User } from '../../_models/user';
import {AuthenticationService} from '../../_services/authentication.service';
import {UserService} from '../../_services/user.service';
import {NotificationsService} from "angular2-notifications/dist";
import {LoadingService} from "../../_services/loading.service";

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
    private translationService: TranslationService,
    private authService: AuthenticationService,
    private userService: UserService,
    private notificationService: NotificationsService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.translationService.enableFallback(true);
  }

  getSelectedLanguage() {
    for (const lang of this.supportedLanguages) {
      if ( this.isCurrentLang(lang.value) ) {
        return lang;
      }
    }
  }

  isCurrentLang(lang: string) {
    return lang === this.translationService.currentLang;
  }

  selectLang(lang: string) {
    this.translationService.use(lang);
    localStorage.setItem('lang', lang);
  }

  langChange(option) {
    this.selectLang(option.value);
  }

  save() {
    this.loadingService.start();
    this.user.language = this.selectedLanguage.value;
    this.userService.updateInfo(this.user).subscribe(
      (res) => {
        this.notificationService.success(
          this.translationService.instant('Saved'),
          this.translationService.instant('Profile is updated'),
          {
            timeOut: 3000,
            clickToClose: true,
            maxLength: 140
          }
        );
        this.loadingService.end();
      },
    (err) => {
        this.notificationService.error(
          this.translationService.instant('Error'),
          this.translationService.instant(err.body),
          {
            timeOut: 3000,
            clickToClose: true,
            maxLength: 140
          }
        );
        this.loadingService.end();
      }
    );
  }

}
