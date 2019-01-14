import { Component, OnInit } from '@angular/core';
import { TranslateAppService } from '../translate-app/translate-app.service';
import { LocalizeRouterService } from 'localize-router';
import { AppConfig } from '../configs/app.config';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  currentLang: string;
  private _config: any;
  constructor(
    private translate: TranslateAppService, 
    private localize: LocalizeRouterService
    ) { 
  }

  ngOnInit() {
    this._config = AppConfig.i18n.availableLanguages;
    // if loaded url contains different language than the default one, we load translation
    if(this.localize.parser.currentLang && 
      (this.translate.lang !== this.localize.parser.currentLang)){
      let newLang = this._config.filter((lang: any) => lang.code === this.localize.parser.currentLang);
      this.onChangeLanguage(newLang[0].locale)
    }
  }
  onChangeLanguage(locale) {
    this.translate.changeLanguage(locale);
    this.localize.changeLanguage(this.translate.lang);
  }

}
