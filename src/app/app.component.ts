import { Component, OnInit } from '@angular/core';
import { NotificationService } from './_services/notification.service';
import { TranslateService } from './_translations/translate.service';
import {AlertsService} from "@jaspero/ng2-alerts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public options = {
    position: ['bottom', 'left'],
    timeOut: 5000,
    lastOnBottom: true
  };

  constructor(
    private notificationService: NotificationService,
    private translationService: TranslateService
  ) {}


  ngOnInit() {
    this.translationService.setDefaultLang('en');
    this.translationService.enableFallback(true);

    const lang = localStorage.getItem('lang');
    if (lang) {
      this.selectLang(lang);
    }
  }

  selectLang(lang: string) {
    this.translationService.use(lang);
    localStorage.setItem('lang', lang);
  }

}
