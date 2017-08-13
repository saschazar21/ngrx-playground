import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { DEFAULT_TODOS } from '../demo-content/todos';
import { ITodo } from '../models/todo';
import { TODOS } from '../shared/store/actions/todo.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // The todo instance array holding the todo items
  public todos: ITodo[];

  // The delay and startTime of the demo todos to appear sequentially (every 2 seconds)
  private delay = 2000;
  private startTime = 2000;

  /**
   * The list component acting as parent component for list items and list form.
   * It subscribes to the store and gets the updated items once actions were handled
   * and the store has changed.
   * @param store The store instance
   */
  constructor(private store: Store<ITodo>) {
    this.store.subscribe((store: any) => {
      this.todos = store.todo;
    });
  }

  /**
   * The timer function for making the demo content appear with a certain delay.
   * @param todo The todo to expose after the delay
   */
  private timer(todo: ITodo): Observable<ITodo> {
    return Observable.of(todo).delay(this.startTime += this.delay);
  }

  /**
   * The on init function, adding the default todos to the store
   */
  ngOnInit() {
    // As a placeholder, default todos can be used,
    // By default, every 2 seconds (2000 millis) a new todo gets added
    Observable.from(DEFAULT_TODOS)
    .delayWhen((todo) => this.timer(todo))
    .subscribe((todo) => this.store.dispatch({
      type: TODOS.ADD_TODO,
      payload: todo,
    }));
  }

}
