import { TodoAction, TODOS } from '../actions/todo.actions';
import { ITodo } from '../../../models/todo';

let todoID = 1;     // Gets incremented in each ADD_TODO action

/**
 * The reducer for the todos, splits each action type into proper handling chains
 * @param state The current state of the store
 * @param action The action which was being triggered (containing type and payload)
 */
export function reducer(
  state: ITodo[],
  action: TodoAction): ITodo[] {
    console.log('Todo reducer', action.type);
    console.log('Todo reducer', action.payload);
    switch (action.type) {
      case TODOS.ADD_TODO:
        // Adding the payload at the end of the current state,
        // without replacing the references to the currently stored todos
        return [
          ...state,
          {
            ...action.payload,
            id: todoID++,
          }
        ];
      case TODOS.UPDATE_TODO:
        // Filters the altered todo and replaces it with the new content
        return state.map((todo) => {
          if (todo.id !== action.payload.id) {
            return todo;
          }
          return action.payload;
        });
      case TODOS.DELETE_TODO:
        // Filters the state and leaves out the todo which should get deleted,
        // therefore, references to other todos remain unchanged
        return state.filter((todo) => todo.id !== action.payload.id);
      default:
        return state;
    }
}
