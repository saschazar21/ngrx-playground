import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { ITodo } from '../../models/todo';
import { TODOS } from '../../shared/store/actions/todo.actions';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  /**
   * The todo instance annotated with the @Input decorator.
   * Will be set from the parent component (List component)
   */
  @Input() public todoItem: ITodo;

  /**
   * The list item component, showing a single list item
   * @param store The store instance for dispatching certain actions
   */
  constructor(private store: Store<ITodo>) { }

  /**
   * Deleting a todo item by dispatching the DELETE_TODO action
   */
  delete() {
    this.store.dispatch({
      type: TODOS.DELETE_TODO,
      payload: this.todoItem,
    });
  }

  /**
   * Editing a todo item by dispatching the EDIT_TODO action
   * (Will be caught by the TodoEffects edit method and handled by the list form component)
   */
  edit() {
    this.store.dispatch({
      type: TODOS.EDIT_TODO,
      payload: this.todoItem,
    });
  }

}
