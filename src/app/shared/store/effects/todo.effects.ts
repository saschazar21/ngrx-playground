import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';

import { ITodo } from '../../../models/todo';
import { TodoAction, TODOS } from '../actions/todo.actions';

@Injectable()
export class TodoEffects {
  @Effect({ dispatch: false }) public edit: Observable<ITodo>;

  constructor(private actions$: Actions) {
    this.edit = this.actions$
      .ofType<TodoAction>(TODOS.EDIT_TODO)
      .map(action => action.payload);
  }
}
