import { ModuleWithProviders, NgModule,  Optional, SkipSelf, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {TranslateCompiler, TranslateDirective, TranslateLoader, TranslateModule, TranslatePipe, TranslateService} from '@ngx-translate/core';

import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateMessageFormatCompiler} from 'ngx-translate-messageformat-compiler';

import { TranslateAppService } from './translate-app.service';
import { DateFormatPipe } from './pipes/date-format.pipe';



// For language switching
// Tutorials here
// https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular7-app-with-ngx-translate
// https://github.com/ngx-translate/core
export function HttpLoaderFactory(http: HttpClient, appService: TranslateAppService, translate: TranslateService) {
  const loader = new TranslateHttpLoader(http, './assets/i18n/');
  return loader;
}

// for Date locales dynamic load
// Tutorial here
// https://medium.com/@DenysVuika/simple-i18n-support-for-your-angular-apps-6138a47eb2a9
export function setupTranslateFactory(appService: TranslateAppService): Function {
  appService.initTranslate()
  return () => appService.registerLocaleData(appService.locale).then(() => {
    appService.use(appService.lang).subscribe();
  })
}

@NgModule({
  declarations: [
    
  DateFormatPipe],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },

      // compiler configuration: to add {values} in translations
      compiler: {
          provide: TranslateCompiler,
          useClass: TranslateMessageFormatCompiler
      }
  })
  ],
  exports:[
    TranslateDirective,
    TranslatePipe,
    DateFormatPipe
  ],
  providers:[ TranslateAppService]
})


export class TranslateAppModule {
  constructor(@Optional() @SkipSelf() parentModule: TranslateAppModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
  
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TranslateAppModule,
      providers: [
        TranslateService,
        TranslateAppService,
        {
          provide: APP_INITIALIZER,
          useFactory: setupTranslateFactory,
          deps: [TranslateAppService],
          multi: true
        }
      ]
    };
  }
}
