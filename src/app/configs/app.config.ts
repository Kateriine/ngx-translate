import { InjectionToken } from '@angular/core';
export let APP_CONFIG = new InjectionToken('app.config');

  // if you add langs, don't forget to add it in function TranslateAppService > registerLocaleData > webpackInclude
  // URLS paths to translate are in translation files: assets/i18n
export const AppConfig: any = {
  dateFormat: 'dd MMMM yyyy',
  i18n: {
    "defaultLanguage": {
      "code": "en",
      "name": "English",
      "locale": "en-GB"
    },
    "availableLanguages": [
      {
        "code": "en",
        "name": "English",
        "locale": "en-GB"
      },
      {
        "code": "fr",
        "name": "Français",
        "locale": "fr-BE"
      },
      {
        "code": "nl",
        "name": "Nederlands",
        "locale": "nl-BE"
      }
    ]
  }
};