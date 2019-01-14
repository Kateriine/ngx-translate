import { Injectable, Injector, Inject, forwardRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { registerLocaleData } from '@angular/common';
import { Observable } from 'rxjs';
import { AppConfig } from '../configs/app.config';
// import { LocalizeRouterService } from 'localize-router';

@Injectable({
  providedIn: 'root'
})
export class TranslateAppService {
  private _locale: string;
  private _lang: string;
  private _config: any;
  
  // Localedate is the locale string used for dateFormatPipe: it has to be loaded if it doesn't exist (at init), 
  // then if we change the language it has to be changed only after registerLocaleData changes
  private _localeDate: string;


  constructor(private translate: TranslateService ) {
      this._config = AppConfig.i18n;
  }

  public setDefault(langData) {
    this.translate.setDefaultLang(langData.code);
    this.translate.addLangs([langData.code]);
    this._locale = langData.locale;
    this._lang = langData.code
    if(!this._localeDate){
      this._localeDate = langData.code;
    }
  }

  public changeLanguage(locale) {
    let langData = this._config.availableLanguages.filter((lang: any)=> {
      return lang.locale===locale
    })[0];
    this.translate.addLangs([langData.code]);
    this._locale = langData.locale;
    this._lang = langData.code;
 
    this.use(langData.code).subscribe(() =>{
      // to do: this.meta.setTag('og:locale', languageCode);
      this.registerLocaleData(this._locale).then(() => {
        this._localeDate = this._locale;
      })
    });

  }


  getBrowserLang(){
    return this.translate.getBrowserLang();
  }

  public get locale() {
    return this._locale;
  }
  public get lang() {
    return this._lang;
  }

  public get localeDate(){
    return this._localeDate;
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
