import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookComponent } from './components/navbar/cook/cook.component';
import { TrendingComponent } from './components/navbar/trending/trending.component';
import { AboutComponent } from './components/navbar/about/about.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'cook', component: CookComponent },
  { path: 'trending', component: TrendingComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
