import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from './';

@Pipe({
  name: 'translate',
  pure: false
})

export class TranslatePipe implements PipeTransform {

  constructor(private _translate: TranslationService) { }

  transform(value: string, args: string | string[]): any {
    if (!value) {
      return;
    }
    return this._translate.instant(value, args);
  }
}
