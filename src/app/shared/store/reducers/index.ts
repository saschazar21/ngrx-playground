import { ActionReducerMap } from '@ngrx/store';

import { ITodo } from '../../../models/todo';
import * as Todo from './todo.reducer';

export interface State {
  todo: ITodo[];
}

export const reducers: ActionReducerMap<State> = {
  todo: Todo.reducer,
};
