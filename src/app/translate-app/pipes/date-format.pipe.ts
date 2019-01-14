
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateAppService } from '../translate-app.service';
// 'pure: false' otherwise the value is not updated
@Pipe({
  name: 'dateFormat',
  pure: false
})
export class DateFormatPipe extends DatePipe implements PipeTransform {
  public formatted: string = null;
  
  constructor(private translate: TranslateService, private translateApp: TranslateAppService) {
    super(translate.currentLang);
  }
  public transform(value: any): any {
    this.formatted = super.transform(value, 'dd MMMM yyyy', undefined, this.translateApp.localeDate);

    return this.formatted;
  }
}
