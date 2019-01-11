import { InjectionToken } from '@angular/core';
export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {
  langs: ['en', 'fr', 'nl'], 
  dateFormat: 'dd MMMM yyyy'
  
};