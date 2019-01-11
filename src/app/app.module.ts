import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';

import {HttpClientModule} from '@angular/common/http';
import { LanguageComponent } from './language/language.component';
import { TranslateAppModule } from './translate-app/translate-app.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TermsComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateAppModule.forRoot()
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
