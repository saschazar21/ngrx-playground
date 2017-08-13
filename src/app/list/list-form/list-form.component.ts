import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { ITodo } from '../../models/todo';
import { TODOS } from '../../shared/store/actions/todo.actions';
import { TodoEffects } from '../../shared/store/effects/todo.effects';

const MODE = {
  EDIT: 'Edit',
  ADD: 'Add',
};

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss']
})
export class ListFormComponent implements OnInit {
  public status: string = MODE.ADD;
  public todoForm: FormGroup;
  public body: FormControl;
  public title: FormControl;
  public id: FormControl;

  constructor(private store: Store<ITodo>, private todoEffects: TodoEffects) {}

  ngOnInit() {
    this.body = new FormControl('');
    this.title = new FormControl('');
    this.id = new FormControl(0);
    this.todoForm = new FormGroup({
      title: this.title,
      body: this.body,
      id: this.id,
    });

    this.todoEffects.edit.subscribe((payload) => {
      this.todoForm.setValue(payload);
      this.status = MODE.EDIT;
    });
  }

  onSubmit(form: FormGroup) {
    const obj: ITodo = {
      title: this.title.value.trim(),
      body: this.body.value.trim(),
      id: this.id.value,
    };

    this.store.dispatch({
      type: this.status === MODE.EDIT ? TODOS.UPDATE_TODO : TODOS.ADD_TODO,
      payload: Object.assign({}, obj),
    });
    this.todoForm.reset();

    this.status = MODE.ADD;
  }
}
