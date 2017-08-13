import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';

import { ITodo } from '../../../models/todo';
import { TodoAction, TODOS } from '../actions/todo.actions';

@Injectable()
export class TodoEffects {
  // dispatch: false won't dispatch a new action to the store,
  // not needed here, because no content is being altered using this action type
  @Effect({ dispatch: false }) public edit: Observable<ITodo>;

  /**
   * The TodoEffects class, currently implementing only the edit effect.
   * @param actions$ An observable of actions
   */
  constructor(private actions$: Actions) {
    // Filtering the actions for the EDIT_TODO action type and mapping the action payload to the observable
    this.edit = this.actions$
      .ofType<TodoAction>(TODOS.EDIT_TODO)
      .map(action => action.payload);
  }
}
