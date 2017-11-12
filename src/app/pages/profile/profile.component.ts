import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../_translations/translate.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public supportedLanguages = [
    { display: 'English', value: 'en' },
    { display: 'Русский', value: 'ru' },
  ];

  constructor(private _translate: TranslateService) { }

  ngOnInit() {
    this._translate.setDefaultLang('en');
    this._translate.enableFallback(true);

    const lang = localStorage.getItem('lang');
    console.log(lang);
    if (lang) {
      this.selectLang(lang);
    }
  }

  isCurrentLang(lang: string) {
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    this._translate.use(lang);
    localStorage.setItem('lang', lang);
  }

}
