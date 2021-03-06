import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdInputModule,
  MdButtonModule,
  MdListModule,
  MdSidenavModule,
  MdToolbarModule
} from '@angular/material';

/**
 * Just a child module exporting all the used @angular/material components
 */
@NgModule({
  exports: [
    MdInputModule,
    MdButtonModule,
    MdListModule,
    MdSidenavModule,
    MdToolbarModule,
    NoopAnimationsModule,
  ],
  imports: [
    CommonModule,
    MdInputModule,
    MdListModule,
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule,
    NoopAnimationsModule,
  ],
  declarations: []
})
export class MaterialModule { }
