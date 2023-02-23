import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RecipesComponent } from './recipes/recipes.component';
import { MaterialDesignModule } from './material-design/material-design.module';

@NgModule({
  declarations: [AppComponent, RecipesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
