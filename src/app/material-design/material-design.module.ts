import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

/**
 *@description Module for Material Design. Instead of using App Module we use this one for the Material Design.
 */

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [BrowserAnimationsModule,
    MatSlideToggleModule,]
})
export class MaterialDesignModule { }
