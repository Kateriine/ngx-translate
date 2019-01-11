import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { registerLocaleData } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateAppService {
  private _locale: string;
  private _lang: string;

  // if you add langs, don't forget to add it in function registerLocaleData > webpackInclude
  private settings: any = {
    langs:['en', 'fr', 'nl'], defaultLocale:'en-GB'
  }
  constructor(private translate: TranslateService) {
   
  }

  public initTranslate() {
    if (localStorage.getItem('appLocale')) {
      this._locale = localStorage.getItem('appLocale');
    }
    else {
      this._locale = this.settings.defaultLocale;
    }this._lang = this.translate.currentLang = this._locale.substring(0, this._locale.indexOf('-'));
    this.translate.setDefaultLang(this.translate.currentLang);
  }

  public get locale() {
    return this._locale;
  }
  public get lang() {
    return this._lang;
  }

  public changeLanguage(locale) {
    localStorage.setItem('appLocale', locale);
    this.setTranslate()
  }
  public setTranslate() {
    this.initTranslate()
    this.use(this.translate.currentLang).subscribe(res =>{
      this.registerLocaleData(this._locale)
    });
  }
  public use(lang: string): Observable<{}> {
    return this.translate.use(lang);
  }
  public registerLocaleData(localeId: string): Promise<any> {
    return import(
      /* webpackInclude: /(fr-BE|nl-BE|en-GB)\.js$/ */
      `@angular/common/locales/${localeId}.js`
    ).then((module) => {
      registerLocaleData(module.default);
      }
    );
  }
}
