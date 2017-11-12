import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../_translations/translate.service';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public supportedLanguages = [
    { display: 'English', value: 'en', flag: 'us' },
    { display: 'Русский', value: 'ru', flag: 'ru' },
  ];

  selectedLanguage = this.getSelectedLanguage();

  constructor(private _translate: TranslateService) { }

  ngOnInit() {
    this._translate.enableFallback(true);
  }

  getSelectedLanguage() {
    for (let lang of this.supportedLanguages) {
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

}
