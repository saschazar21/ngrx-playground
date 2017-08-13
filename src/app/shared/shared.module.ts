import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from '../list/list.component';
import { MaterialModule } from './material/material.module';
import { AppStoreModule } from './store/store.module';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
];

/**
 * The main shared module which contains all the necessary third party modules
 */
@NgModule({
  exports: [
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    AppStoreModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    AppStoreModule,
  ],
  declarations: []
})
export class SharedModule { }
