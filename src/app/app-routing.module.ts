import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookComponent } from './components/navbar/cook/cook.component';
import { TrendingComponent } from './components/navbar/trending/trending.component';
import { AboutComponent } from './components/navbar/about/about.component';

const routes: Routes = [
  { path: 'cook', component: CookComponent },
  { path: 'trending', component: TrendingComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
