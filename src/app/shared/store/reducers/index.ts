import { ActionReducerMap } from '@ngrx/store';

import { ITodo } from '../../../models/todo';
import * as Todo from './todo.reducer';

/**
 * The state interface, consisting of an array of todos for the 'todo' store
 */
export interface State {
  todo: ITodo[];
}

/**
 * The reducer map, with the todo reducer being added to the 'todo' property,
 * thus, properties of reducers and State interface need to be equal
 */
export const reducers: ActionReducerMap<State> = {
  todo: Todo.reducer,
};
