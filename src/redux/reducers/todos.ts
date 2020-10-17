import { load } from 'redux-localstorage-simple';
import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO } from '../../constans';
import { TodoActionTypes, IInitialStateTodo } from '../../interfaces';

const savedTodos: any = load({ namespace: 'todos' });

console.log(savedTodos);
const initialState: IInitialStateTodo =
  savedTodos && savedTodos.todos
    ? savedTodos.todos
    : {
        todos: [{ id: 1, title: 'sada', completed: false }],
      };

export const todos = (state = initialState, action: TodoActionTypes): IInitialStateTodo => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case REMOVE_TODO:
      const id = action.payload;
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: [...state.todos].map((todo) => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
