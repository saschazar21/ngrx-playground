import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { ITodo } from '../../models/todo';
import { TODOS } from '../../shared/store/actions/todo.actions';
import { TodoEffects } from '../../shared/store/effects/todo.effects';

/**
 * Mode switcher for the form component.
 * Either show 'Edit todo', or 'Add todo'
 */
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

  /**
   * The list form component. Shows a form and dispatches events after submission
   * @param store The ngrx store instance
   * @param todoEffects The effects to subscribe to, for editing a todo
   */
  constructor(private store: Store<ITodo>, private todoEffects: TodoEffects) {}

  /**
   * The init function, instantiates the reactive form.
   * Also subscribes to TodoEffects and sets respective values on the form instance.
   */
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

  /**
   * The submission function, takes a FormGroup as parameter and cares for dispatching store actions.
   * @param form The FormGroup instance of the reactive form
   */
  onSubmit(form: FormGroup) {
    // Creates an intermediate todo instance
    const obj: ITodo = {
      title: this.title.value.trim(),
      body: this.body.value.trim(),
      id: this.id.value,                // Will be 0 on new elements and set accordingly in the reducer
    };

    // Dispatch an action according to the current status (edit or add)
    this.store.dispatch({
      type: this.status === MODE.EDIT ? TODOS.UPDATE_TODO : TODOS.ADD_TODO,
      payload: Object.assign({}, obj),
    });

    // Clear the form and reset the status after submission
    this.todoForm.reset();
    this.status = MODE.ADD;
  }
}
