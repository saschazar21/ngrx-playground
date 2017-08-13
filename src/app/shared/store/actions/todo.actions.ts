import { Action } from '@ngrx/store';

import { ITodo } from '../../../models/todo';

/**
 * The todo actions, an object containing strings for better comparison
 */
export const TODOS = {
  ADD_TODO: 'ADD_TODO',
  EDIT_TODO: 'EDIT_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
  DELETE_TODO: 'DELETE_TODO',
};

/**
 * The TodoAction, implementing the Action interface,
 * consisting of two member variables:
 *  - type: will be one of the above
 *  - payload: will be the respective todo instance, which needs to get handled
 */
export class TodoAction implements Action {
  public readonly type: string;

  /**
   * The TodoAction implementing the Action interface
   * @param payload The todo instance, which needs to get handled
   */
  constructor(public payload: ITodo) { }
}
