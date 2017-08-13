import { Action } from '@ngrx/store';

import { ITodo } from '../../../models/todo';

export const TODOS = {
  ADD_TODO: 'ADD_TODO',
  EDIT_TODO: 'EDIT_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
  DELETE_TODO: 'DELETE_TODO',
};

export class TodoAction implements Action {
  public readonly type: string;

  constructor(public payload: ITodo) { }
}
