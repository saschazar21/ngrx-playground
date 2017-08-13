import { TODOS } from '../shared/store/actions/todo.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { DEFAULT_TODOS } from '../demo-content/todos';
import { ITodo } from '../models/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public todos: ITodo[];

  private delay = 2000;
  private startTime = 2000;

  constructor(private store: Store<ITodo>) {
    this.store.subscribe((store: any) => {
      this.todos = store.todo;
    });
  }

  private timer(todo: ITodo): Observable<ITodo> {
    return Observable.of(todo).delay(this.startTime += this.delay);
  }

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
