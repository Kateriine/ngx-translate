import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateAppService } from './translate-app/translate-app.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(translate:TranslateService, appService: TranslateAppService) {
    
  }
}
