import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TodoEffects } from './effects/todo.effects';
import { reducers } from './reducers';

@NgModule({
  exports: [
    EffectsModule,
    StoreModule,
  ],
  imports: [
    CommonModule,
    EffectsModule.forRoot([TodoEffects]),
    StoreModule.forRoot(reducers, {
      initialState: {
        todo: [],
      },
    }),
  ],
  declarations: [],
  providers: [
    TodoEffects,
  ]
})
export class AppStoreModule { }
