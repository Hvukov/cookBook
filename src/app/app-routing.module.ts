import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookComponent } from './components/navbar/cook/cook.component';
import { TrendingComponent } from './components/navbar/trending/trending.component';
import { AboutComponent } from './components/navbar/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { SiteLayoutComponent } from './components/site-layout/site-layout.component';

const routes: Routes = [
  {
    path: 'cook',
    component: SiteLayoutComponent,
    children: [
      { path: 'cook', component: CookComponent },
      { path: 'trending', component: TrendingComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
