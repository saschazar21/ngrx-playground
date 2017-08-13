import { TODOS } from '../../shared/store/actions/todo.actions';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { ITodo } from '../../models/todo';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() public todoItem: ITodo;
  constructor(private store: Store<ITodo>) { }

  delete() {
    this.store.dispatch({
      type: TODOS.DELETE_TODO,
      payload: this.todoItem,
    });
  }

  edit() {
    this.store.dispatch({
      type: TODOS.EDIT_TODO,
      payload: this.todoItem,
    });
  }

}
