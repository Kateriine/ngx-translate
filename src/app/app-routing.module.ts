import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: { animation: 'page' },
    // children: [
    //   { path: ':lang/:pageTranslation', component: PageBaseComponent }
    // ] 
  },
  { path: 'about', component: AboutComponent },
  
  { path: 'terms', component: TermsComponent },
  // { path: AppConfig.routes.error404, component: Error404PageComponent },

  // // otherwise redirect to 404
  // { path: '**', redirectTo: '/' + AppConfig.routes.error404 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
