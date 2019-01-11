import { Component, Input, OnInit } from '@angular/core';
import { TranslateAppService } from '../translate-app/translate-app.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  currentLang: string;
  constructor(private translate: TranslateAppService) { 
    
    // this.currentLang = translate.lang;
  }

  ngOnInit() {
  }
  onChangeLanguage(locale) {
    this.translate.changeLanguage(locale);
    // this.translate.localeInitializer(locale).then(() => {
    //   this.translate.use(locale).subscribe();
    //   this.currentLang = this.translate.lang;
    //   // this.translate.eventRefresh();

    // })
  }
  
  

}
