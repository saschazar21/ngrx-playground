import { TodoAction, TODOS } from '../actions/todo.actions';
import { ITodo } from '../../../models/todo';

let todoID = 1;

export function reducer(
  state: ITodo[],
  action: TodoAction): ITodo[] {
    console.log('Todo reducer', action.type);
    console.log('Todo reducer', action.payload);
    switch (action.type) {
      case TODOS.ADD_TODO:
        return [
          ...state,
          {
            ...action.payload,
            id: todoID++,
          }
        ];
      case TODOS.UPDATE_TODO:
        return state.map((todo) => {
          if (todo.id !== action.payload.id) {
            return todo;
          }
          return action.payload;
        });
      case TODOS.DELETE_TODO:
        return state.filter((todo) => todo.id !== action.payload.id);
      default:
        return state;
    }
}
